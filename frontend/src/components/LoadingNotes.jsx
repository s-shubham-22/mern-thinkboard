import { LoaderCircle } from 'lucide-react'

const LoadingNotes = () => {
  return (
    <div className="flex items-center justify-center space-x-2 py-10">
      <LoaderCircle className="animate-spin size-5" />
      <span>Loading notes...</span>
    </div>
  )
}
export default LoadingNotes
