import { Button } from 'antd'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-6">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Oops! The page you’re looking for does not exist.</p>
            <Link
                href="/"

            >
                <Button 
                type='primary'
                >
                    Go Back Home
                </Button>
            </Link>
        </div>
    )
}
