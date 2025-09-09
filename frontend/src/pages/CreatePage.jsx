import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowLeftIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

import api from '../lib/axios'

const CreatePage = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title.trim() || !content.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    setLoading(true)

    try {
      const res = await api.post('/notes', { title, content })
      if (res.status !== 201) {
        throw new Error('Failed to create note')
      }
      toast.success('Note created successfully')
      navigate(`/`)
    } catch (error) {
      console.error('Error creating note:', error)
      if (error.response && error.response.status === 429) {
        toast.error('Slow down! You are creating notes too quickly.', {
          duration: 4000,
          icon: '💀'
        })
      } else {
        toast.error('Failed to create note.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to={'/'} className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5' />
            Back to Notes
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    placeholder="Note Content"
                    className="textarea textarea-bordered"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Note'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CreatePage
