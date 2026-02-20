import { setSelectedJob } from "@/data/slices/JobSlice"
import { Check, CircleX, Dot } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { useFormatPostedTime } from "@/CustomHooks/CustomTimeFormat"

function JobDetails() {

    const { selectedJob } = useSelector(state => state.job)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const closeDialog = () => {
        dispatch(setSelectedJob({}))
    }

    return (
        <>
            {selectedJob?.title &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fadeIn">

                    <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-slate-900/90 to-indigo-900/70 border border-white/10 shadow-2xl p-8 transition-all duration-300 scale-100">

                        {/* Close Button */}
                        <button
                            onClick={closeDialog}
                            className="absolute top-5 right-5 text-white/60 hover:text-red-400 transition-transform hover:rotate-90"
                        >
                            <CircleX size={26} />
                        </button>

                        {/* Header */}
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-white">
                                {selectedJob.title}
                            </h2>

                            <p className="flex text-indigo-300 mt-1 text-sm">
                                {selectedJob.company} <Dot /> {selectedJob.location}
                            </p>

                            <p className="flex text-xs text-gray-400 mt-2">
                                Posted {useFormatPostedTime(selectedJob.postedAt)} <Dot />{" "}
                                {new Date(selectedJob.postedAt).toDateString()}
                            </p>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {[selectedJob.type, selectedJob.experience, selectedJob.salary || "Not disclosed"].map((item, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/20"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        {/* Skills */}
                        {selectedJob?.skills?.length > 0 && (
                            <div className="mb-6">
                                <div className="text-indigo-300 font-medium mb-3">
                                    Expected Skills
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {selectedJob.skills.map((skill, index) => (
                                        <span
                                            key={skill + index}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-200 hover:bg-indigo-500/20 transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Roles & Responsibilities */}
                        {selectedJob?.rolesAndResponsibilities?.length > 0 && (
                            <div className="mb-8">
                                <div className="text-indigo-300 font-medium mb-3">
                                    Roles & Responsibilities
                                </div>
                                <div className="space-y-2 text-gray-200">
                                    {selectedJob.rolesAndResponsibilities.map((rnr, index) => (
                                        <p key={rnr + index} className="flex gap-2">
                                            <Check size={16} className="text-indigo-400 mt-1" />
                                            <span>{rnr}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex justify-end gap-4">
                            <a
                                href={selectedJob.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-400 to-indigo-500 text-black hover:scale-105 transition-all shadow-lg"
                            >
                                Apply Now
                            </a>

                            <button
                                onClick={() => {
                                    dispatch(setSelectedJob({}))
                                    navigate(`/job-details/${selectedJob.id}`)
                                }}
                                className="px-6 py-2 rounded-xl text-sm border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all"
                            >
                                Know More
                            </button>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default JobDetails