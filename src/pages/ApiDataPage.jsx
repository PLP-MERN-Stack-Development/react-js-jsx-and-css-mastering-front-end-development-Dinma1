import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function ApiDataPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const postsPerPage = 10;

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postsPerPage}`
      );
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return (
      <Card className="bg-red-50 border border-red-200">
        <p className="text-red-600">Error: {error}</p>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search posts..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid gap-6 animate-fade-in">
          {filteredPosts.map(post => (
            <Card key={post.id} title={post.title}>
              <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <Button
          variant="secondary"
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          variant="secondary"
          onClick={() => setPage(p => p + 1)}
          disabled={posts.length < postsPerPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
}