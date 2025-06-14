import { useState } from 'react'
import TopicList from './TopicList'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [showTopicList, setShowTopicList] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const topics = [
    "今日の天気はどうですか？",
    "最近見た映画について教えてください",
    "好きな食べ物は何ですか？",
    "休日はどのように過ごしますか？",
    "子供の頃の思い出を教えてください",
    "今一番欲しいものは何ですか？",
    "最近始めた新しい習慣はありますか？",
    "お気に入りの音楽やアーティストはいますか？",
    "今年の目標は何ですか？",
    "ストレス解消法はありますか？",
    "好きな季節とその理由を教えてください",
    "最近読んだ本でおすすめはありますか？",
    "理想の旅行先はどこですか？",
    "もし宝くじが当たったらどうしますか？",
    "最近感動したことはありますか？",
    "好きなスポーツや運動はありますか？",
    "子供の頃の夢は何でしたか？",
    "最近のマイブームは何ですか？",
    "お気に入りのテレビ番組やドラマはありますか？",
    "今までで一番印象に残っている出来事は？",
    "好きな動物は何ですか？",
    "料理は得意ですか？好きな料理は？",
    "最近笑ったことはありますか？",
    "もし一日だけ透明人間になれたらどうしますか？",
    "好きな色とその理由を教えてください",
    "最近新しく学んだことはありますか？",
    "お気に入りの場所はどこですか？",
    "もし時間を止められたらどうしますか？",
    "最近変わったことはありますか？",
    "好きな言葉やモットーはありますか？",
    "最近困ったことはありますか？",
    "もし魔法が使えたらどうしますか？",
    "好きな花は何ですか？",
    "最近うれしかったことは何ですか？",
    "もし一つだけ願いが叶うとしたら？",
    "好きな香りはありますか？",
    "最近驚いたことはありますか？",
    "もし動物と話せたらどの動物と話したいですか？",
    "好きなお菓子やデザートは何ですか？",
    "最近頑張っていることはありますか？",
    "もし過去に戻れるとしたらいつに戻りたいですか？",
    "好きな時間帯はいつですか？",
    "最近発見した新しいお店はありますか？",
    "もし一週間休みがあったらどうしますか？",
    "好きな匂いは何ですか？",
    "最近印象に残った言葉はありますか？",
    "もし空を飛べたらどこに行きたいですか？",
    "好きな手作り料理はありますか？",
    "最近心に残った景色はありますか？",
    "もし一日だけ有名人になれたら誰になりたいですか？"
  ]

  const getRandomTopic = () => {
    setIsGenerating(true)
    // Add a small delay for better UX
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * topics.length)
      setSelectedTopic(topics[randomIndex])
      setIsGenerating(false)
    }, 500)
  }

  if (showTopicList) {
    return (
      <TopicList 
        topics={topics} 
        onBack={() => setShowTopicList(false)} 
      />
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex flex-col justify-center p-4 relative overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto">
        {/* Modern header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-8 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            雑談トピックジェネレーター
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            会話のきっかけを見つけて、コミュニケーションを豊かにしましょう
          </p>
        </div>
        
        {/* Topic display */}
        <div className="mb-12">
          {selectedTopic ? (
            <Card className="bg-white dark:bg-slate-800 border-0 shadow-xl transform transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center justify-center">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 px-4 py-1">
                    💡 今日のトピック
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <blockquote className="text-slate-900 dark:text-white text-2xl font-medium leading-relaxed text-center border-l-4 border-blue-500 pl-6 italic">
                  {selectedTopic}
                </blockquote>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white/50 dark:bg-slate-800/50 border-2 border-dashed border-slate-300 dark:border-slate-600 text-center backdrop-blur-sm">
              <CardContent className="p-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-xl font-medium">ボタンを押して新しい話題を見つけましょう</p>
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <Button
            onClick={getRandomTopic}
            disabled={isGenerating}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-blue-400 disabled:to-purple-400 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 disabled:scale-100 disabled:translate-y-0 h-auto group"
          >
            <div className="flex items-center justify-center gap-3">
              <svg className={`w-5 h-5 ${isGenerating ? 'animate-spin' : 'group-hover:animate-spin'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-lg">{isGenerating ? '生成中...' : '新しい話題を選ぶ'}</span>
            </div>
          </Button>
          
          <Button
            onClick={() => setShowTopicList(true)}
            variant="outline"
            className="flex-1 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-0.5 h-auto"
          >
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-lg">全てのトピックを見る</span>
            </div>
          </Button>
        </div>
        
        {/* Stats section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-700 dark:text-slate-300 font-medium">全{topics.length}個のトピックを収録</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
