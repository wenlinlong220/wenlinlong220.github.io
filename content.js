// 日常更新只需修改此文件。每条资料分别维护 zh（中文）和 en（英文）。
window.PROFILE = {
  zh: {
    name: '温麟陇', otherName: 'Wen Linlong', role: '机器人工程 · 本科在读', university: '重庆大学', school: '机械与运载工程学院', location: '中国 · 重庆',
    nav: ['关于我', '研究方向', '项目', '经历', '教育'],
    titles: ['关于我', '研究方向', '研究与项目', '荣誉与经历', '教育背景'],
    biography: ['你好，我是温麟陇，目前是重庆大学机器人工程专业本科生。计划于2027年赴浙江大学攻读机械电子工程博士学位。主要研究关于足式机器人的运动控制，尤其是基于强化学习的机器人运动控制。', '欢迎交流研究想法与经验。'],
    contact: '与我联系 ↗',
    research: [
      { title: '强化学习', description: ' 研究强化学习在足式机器人运动控制中的应用' },
      { title: '电液足式机器人', description: ' 尝试探索电液驱动的足式机器人的强化学习运动控制设计' }
    ],
    projects: [
      {
        "images": [
          {
            "src": "assets/underwater-control.png",
            "height": 866
          },
          {
            "src": "assets/underwater-learning.png",
            "width": 1557,
            "height": 851
          }
        ],
        "id": "underwater-robot",
        "title": "6-DOF 水下抓取机器人研发",
        "kind": "本科国家级大创项目（重点支持领域）",
        "period": "2026.02 — 至今",
        "description": "面向狭小空间抓取，研究“2 舵机—4 推进器”水下机器人的运动控制。",
        "tags": [
          "ROS 2",
          "MuJoCo",
          "MJLAB",
          "PPO",
          "MPC"
        ],
        "work": [
          {
            "title": "运动模式设计",
            "description": "借鉴车辆差动模式，提出基于虚拟摩擦力的三维曲线跟踪方案。"
          },
          {
            "title": "MPC–解析反解控制",
            "description": "基于 ROS 2 与 MuJoCo，结合标称动力学 MPC 与解析反解，实现三维轨迹跟踪。"
          },
          {
            "title": "PPO 动态抓捕",
            "description": "基于 MJLAB 与 PPO，设计位姿—速度梯度下降耦合奖励，实现近端动态抓捕控制。"
          }
        ]
      },
      {
        "images": [
          {
            "src": "assets/smart-car-framework.png",
            "width": 1707,
            "height": 904
          }
        ],
        "links": [
          {
            "href": "assets/smart-car-award.pdf",
            "label": "查看获奖证书"
          }
        ],
        "title": "全国大学生智能汽车竞赛（完全模型组）",
        "kind": "竞赛项目-全国一等奖",
        "period": "2025.02 — 2025.08",
        "description": "在 Ubuntu 下开发视觉导航模块：基于八邻域算法实现赛道巡线，设计自适应变增益弯道控制；结合 YOLO 识别锥桶、行人与路障，利用三阶贝塞尔曲线规划平滑避障路径，并完成临时停车区、十字路口识别及状态机切换。",
        "tags": [
          "Ubuntu",
          "八邻域巡线",
          "自适应弯道控制",
          "YOLO",
          "贝塞尔曲线",
          "状态机"
        ],
        "id": "smart-car"
      }
    ],
    experience: [
    ],
    education: [
  {
    title: '浙江大学',
    description: '机械工程学院 · 机械电子工程',
    degree: '博士阶段（计划）',
    period: '2027 起（计划）'
  },
  {
    title: '重庆大学',
    description: '机械与运载工程学院 · 机器人工程',
    degree: '本科在读',
    period: '2023 — 2027（预计）'
  }
],
  backTop: '返回顶部 ↑'
  },
  en: {
    name: 'Wen Linlong', otherName: '温麟陇', role: 'Undergraduate Student · Robotics Engineering', university: 'Chongqing University', school: 'School of Mechanical and Vehicle Engineering', location: 'Chongqing, China',
    nav: ['About Me', 'Research Interests', 'Projects', 'Experience', 'Education'],
    titles: ['About Me', 'Research Interests', 'Research & Projects', 'Honors & Experience', 'Education'],
    biography: ['Hello, my name is Wen Linlong. I am currently an undergraduate student in Robotics Engineering at Chongqing University. I plan to begin Ph.D. studies in Mechatronic Engineering at Zhejiang University in 2027. My research interests focus on legged robot motion control, particularly reinforcement learning for robot motion control.', 'I welcome conversations about research ideas and project experiences.'],
    contact: 'Get in touch ↗',
    research: [
      { title: 'Reinforcement Learning', description: ' Applying reinforcement learning to motion control for legged robots.' },
      { title: 'Electro-Hydraulic Legged Robots', description: ' Exploring reinforcement learning-based motion control for electro-hydraulically actuated legged robots.' }
    ],
    projects: [
      {
        "id": "underwater-robot",
        "title": "6-DOF Underwater Grasping Robot Development",
        "kind": "National Key Undergraduate Innovation Project (Priority Area)",
        "period": "Feb 2026 — Present",
        "description": "Motion control for a two-servo, four-thruster underwater robot operating in confined spaces.",
        "tags": [
          "ROS 2",
          "MuJoCo",
          "MJLAB",
          "PPO",
          "MPC"
        ],
        "images": [
          {
            "src": "assets/underwater-control.png",
            "width": 1562,
            "height": 866
          },
          {
            "src": "assets/underwater-learning.png",
            "width": 1557,
            "height": 851
          }
        ],
        "work": [
          {
            "title": "Motion Mode Design",
            "description": "Proposed virtual-friction-based 3D curve tracking inspired by differential-drive motion."
          },
          {
            "title": "MPC–Inverse Kinematics Control",
            "description": "Combined nominal-dynamics MPC and analytical inverse kinematics in ROS 2 and MuJoCo for 3D trajectory tracking."
          },
          {
            "title": "PPO-Based Dynamic Grasping",
            "description": "Used MJLAB and PPO with coupled pose–velocity reward shaping based on gradient descent for close-range dynamic grasping."
          }
        ]
      },
      {
        "title": "National Undergraduate Intelligent Car Competition — Full Model Category",
        "kind": "National First Prize",
        "period": "Feb 2025 — Aug 2025",
        "description": "Developed visual navigation in Ubuntu: eight-neighborhood track following and adaptive variable-gain cornering control; YOLO detection of cones, pedestrians, and roadblocks; smooth obstacle avoidance using cubic Bézier curves; and recognition of temporary parking areas and intersections with state-machine switching.",
        "tags": [
          "Ubuntu",
          "Eight-neighborhood tracking",
          "Adaptive cornering",
          "YOLO",
          "Bézier curves",
          "State machines"
        ],
        "images": [
          {
            "src": "assets/smart-car-framework.png",
            "width": 1707,
            "height": 904
          }
        ],
        "links": [
          {
            "href": "assets/smart-car-award.pdf",
            "label": "View award certificate"
          }
        ],
        "id": "smart-car"
      }
    ],
    experience: [],
    education: [
      { title: 'Zhejiang University', description: 'School of Mechanical Engineering · Mechatronic Engineering', degree: 'Planned Ph.D. Studies', period: 'From 2027 (planned)' },
      { title: 'Chongqing University', description: 'School of Mechanical and Vehicle Engineering · Robotics Engineering', degree: 'Undergraduate (in progress)', period: '2023 — 2027 (expected)' }
    ],
    backTop: 'Back to top ↑'
  }
};
