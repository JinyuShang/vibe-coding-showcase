// US-07: 作业展示列表 - 编辑式杂志风格
const homework = [
  {
    id: 1,
    icon: "💡",
    title: "AI趋势思考：个人定位与行动方向",
    course: "01 大势不可逆，得势者必胜",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/IGYmw5EG8imxrhkJD3jcP7T5nBh",
    color: "caramel",
  },
  {
    id: 2,
    icon: "🎨",
    title: "产品构思：我的商业网站想法",
    course: "02 从网站开始构建一款商业产品",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/X6w1woRjliECw9k9j3KccLaxnEh",
    color: "terracotta",
  },
  {
    id: 3,
    icon: "🤖",
    title: "AI应用实践：第一个AI应用原型",
    course: "03 与时俱进做出你的第一款 AI 应用",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/UYzRw2ERCiZEzWkjxaScORvVnFd",
    color: "sage",
  },
  {
    id: 4,
    icon: "⌨️",
    title: "编程练习：代码世界入门实战",
    course: "04 AI编程下一站：走入代码的世界",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/VPn9wJWkxigRfBk9lMccMwMenth",
    color: "forest",
  },
  {
    id: 5,
    icon: "🤝",
    title: "协作开发：与AI共建产品项目",
    course: "05 和AI一起vibe coding做产品",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/KmtVwys3Hi4g3ykufL4cWoHBn8f",
    color: "caramel",
  },
  {
    id: 6,
    icon: "🚀",
    title: "部署实践：产品上线与发布记录",
    course: "06 把产品交付到真实世界：上线与发布",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/I1nPwGYagiuf52ksvAEcep9rnec",
    color: "terracotta",
  },
  {
    id: 7,
    icon: "📋",
    title: "产品复盘：从0到1的全流程总结",
    course: "07 一个产品是怎么做出来的",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/GSxtwJ0GHisIlzklvwZcrV2GnZb",
    color: "sage",
  },
  {
    id: 8,
    icon: "🎓",
    title: "毕业展示：学习成果与未来规划",
    course: "08 Demo Day：AI开发完整流程复习课",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/XxDqwdfU1ipKxOkFWbycH8gonRh",
    color: "forest",
  },
];

const colorMap: Record<string, string> = {
  caramel: 'var(--caramel)',
  terracotta: 'var(--terracotta)',
  forest: 'var(--forest)',
  sage: 'var(--sage)',
};

export default function HomeworkList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {homework.map((hw, index) => (
        <div
          key={hw.id}
          className="reveal-on-scroll"
          style={{
            animationDelay: `${index * 100}ms`,
            background: 'var(--warm-white)',
            border: '1px solid rgba(107, 93, 82, 0.15)',
            borderRadius: '0.5rem',
            padding: '2rem',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* 图标 + 标题 */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{hw.icon}</span>
            <h3
              className="font-serif text-xl font-semibold flex-1"
              style={{ color: 'var(--deep-brown)' }}
            >
              {hw.title}
            </h3>
          </div>

          {/* 对应课程 */}
          <p className="font-sans text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
            对应课程：{hw.course}
          </p>

          {/* 查看作业按钮 */}
          <a
            href={hw.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.75rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: '500',
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--deep-brown)',
              background: 'transparent',
              border: '2px solid var(--deep-brown)',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--deep-brown)';
              e.currentTarget.style.color = 'var(--warm-white)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--deep-brown)';
            }}
          >
            <span>✍️ 查看作业</span>
            <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
}
