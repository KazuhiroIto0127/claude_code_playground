import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

function TopicList({ topics, onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 relative overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Modern header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
          <div className="flex items-center mb-6 sm:mb-0">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mr-4 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-1">
                トピック一覧
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-lg">全{topics.length}個の会話スターター</p>
            </div>
          </div>
          <Button
            onClick={onBack}
            variant="outline"
            className="border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 h-auto"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>戻る</span>
            </div>
          </Button>
        </div>
        
        {/* Modern topics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {topics.map((topic, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xs">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-900 dark:text-white text-base leading-relaxed font-medium group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-200">
                      {topic}
                    </p>
                  </div>
                </div>
              </CardContent>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Card>
          ))}
        </div>
        
        {/* Modern footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              全{topics.length}個のトピックを収録中
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopicList