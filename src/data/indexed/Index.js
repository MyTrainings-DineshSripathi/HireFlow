import { useState, useEffect, useCallback } from "react";

const DB_NAME = "appDB";
const DB_VERSION = 2;

const STORES = [
  { name: "users",    keyPath: "id",   autoIncrement: true  },
  { name: "sessions", keyPath: "id",   autoIncrement: true  },
  { name: "tokens",   keyPath: "type", autoIncrement: false },
];

// --- DB singleton ---
let dbPromise = null;

function openDB() {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      STORES.forEach(({ name, keyPath, autoIncrement }) => {
        if (!db.objectStoreNames.contains(name)) {
          db.createObjectStore(name, { keyPath, autoIncrement });
        }
      });
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror   = () => reject(request.error);
  });

  return dbPromise;
}

// --- Core helpers ---

export async function dbAdd(storeName, value) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx      = db.transaction(storeName, "readwrite");
    const store   = tx.objectStore(storeName);
    const request = store.add(value);
    request.onsuccess = () => resolve(request.result);
    request.onerror   = () => reject(request.error);
  });
}

export async function dbPut(storeName, value) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx      = db.transaction(storeName, "readwrite");
    const store   = tx.objectStore(storeName);
    const request = store.put(value);
    request.onsuccess = () => resolve(request.result);
    request.onerror   = () => reject(request.error);
  });
}

export async function dbGet(storeName, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx      = db.transaction(storeName, "readonly");
    const store   = tx.objectStore(storeName);
    const request = store.get(key);
    request.onsuccess = () => resolve(request.result ?? null);
    request.onerror   = () => reject(request.error);
  });
}

export async function dbGetAll(storeName) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx      = db.transaction(storeName, "readonly");
    const store   = tx.objectStore(storeName);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror   = () => reject(request.error);
  });
}

export async function dbDelete(storeName, key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx      = db.transaction(storeName, "readwrite");
    const store   = tx.objectStore(storeName);
    const request = store.delete(key);
    request.onsuccess = () => resolve(true);
    request.onerror   = () => reject(request.error);
  });
}

export async function dbClear(storeName) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx      = db.transaction(storeName, "readwrite");
    const store   = tx.objectStore(storeName);
    const request = store.clear();
    request.onsuccess = () => resolve(true);
    request.onerror   = () => reject(request.error);
  });
}

// --- React hook (for users/sessions stores) ---

export function useIndexedDB(storeName) {
  const [data,    setData]    = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    dbGetAll(storeName)
      .then((records) => setData(records))
      .catch((err)    => setError(err))
      .finally(()     => setLoading(false));
  }, [storeName]);

  const add = useCallback(async (value) => {
    try {
      const newKey    = await dbAdd(storeName, value);
      const newRecord = { ...value, id: newKey };
      setData((prev) => [...prev, newRecord]);
      return newRecord;
    } catch (err) {
      setError(err);
      throw err;
    }
  }, [storeName]);

  const update = useCallback(async (value) => {
    try {
      await dbPut(storeName, value);
      setData((prev) =>
        prev.map((item) => (item.id === value.id ? value : item))
      );
      return value;
    } catch (err) {
      setError(err);
      throw err;
    }
  }, [storeName]);

  const remove = useCallback(async (key) => {
    try {
      await dbDelete(storeName, key);
      setData((prev) => prev.filter((item) => item.id !== key));
    } catch (err) {
      setError(err);
      throw err;
    }
  }, [storeName]);

  const getById = useCallback(async (key) => {
    try {
      return await dbGet(storeName, key);
    } catch (err) {
      setError(err);
      throw err;
    }
  }, [storeName]);

  const clearAll = useCallback(async () => {
    try {
      await dbClear(storeName);
      setData([]);
    } catch (err) {
      setError(err);
      throw err;
    }
  }, [storeName]);

  return { data, loading, error, add, update, remove, getById, clearAll };
}

export { openDB };