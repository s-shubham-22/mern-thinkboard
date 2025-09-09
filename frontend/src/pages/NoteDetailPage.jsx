import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router'
import { LoaderCircle, Trash2Icon, ArrowLeftIcon } from 'lucide-react'

import api from '../lib/axios'
import toast from 'react-hot-toast'

const NoteDetailPage = () => {
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`)
        setNote(res.data)
      } catch (error) {
        console.error('Error fetching note:', error)
        toast.error('Failed to fetch note')
      } finally {
        setLoading(false)
      }
    }

    fetchNote()
  }, [id])

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully");
      navigate(`/`);
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  }

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    setSaving(true)

    try {
      await api.put(`/notes/${id}`, {
        title: note.title,
        content: note.content
      })
      navigate('/')
      toast.success('Note updated successfully')
    } catch (error) {
      console.error('Error updating note:', error)
      if (error.response && error.response.status === 429) {
        toast.error('Slow down! You are updating notes too quickly.', {
          duration: 4000,
          icon: '💀'
        })
      } else {
        toast.error('Failed to update note.')
      }
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderCircle />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container max-w-2xl mx-auto px-4 py-8">
        <div className='flex items-center justify-between mb-6'>
          <Link to={'/'} className='btn btn-ghost'>
            <ArrowLeftIcon className='size-5' />
            Back to Notes
          </Link>
          <button onClick={handleDelete} className='btn btn-error btn-outline'>
            <Trash2Icon className='size-5' />
            Delete Note
          </button>
        </div>

        {note ? (
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder='Note Title'
                  className="input input-bordered"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder='Note Content'
                  className="textarea textarea-bordered h-32"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                />

              </div>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <p className="text-base-content/70">Note not found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default NoteDetailPage
