// 学院简称映射表
const collegeShortNames = {
    "材料与化学学院（含国重实验室）": "材化学院（含国重实验室）",
    "环境与资源学院": "环资学院",
    "信息与控制工程学院": "信控学院",
    "生命科学与农林学院": "生命学院",
    "制造科学与工程学院": "制造学院",
    "国防科技学院核科学技术学院": "国防学院",
    "土木工程与建筑学院": "土建学院",
    "计算机科学与技术学院": "计算机学院",
    "数理学院": "数理学院",
    "航空航天学院": "航空航天学院",
    "医学院": "医学院",

    "马克思主义学院": "马克思主义学院",
    "经济管理学院": "经管学院",
    "外国语学院": "外语学院",
    "文学与艺术学院": "文艺学院",
    "法学院": "法学院",
    "体育与健康学院": "体健学院",
    "应用技术学院": "应技学院",
    "继续教育学院": "继教学院",

    "工程技术中心": "工程中心",
    "分析测试中心": "分测中心",
    "核环境安全技术创新中心": "核创中心",
    "拉美研究中心": "拉美研究中心",

    "四川省军民融合研究院": "军民研究院",
    "成都创新研究院": "成都研究院",
};

// 学院分类信息
// 1. 理工类学院
const scienceColleges = [

    {
        "name": "材料与化学学院（含国重实验室）",
        "shortName": "材化学院",
        "tasks": [
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 350.0,
                "tasks0": 8.0,
                "taskscomple": 28.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 258.09,
                "tasks0": 110.0,
                "taskscomple": 283.9
            },
            {
                "name": "国家重大（重点）项目（项）",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 180.2,
                "tasks0": 205.0,
                "taskscomple": 369.4
            },
            {
                "name": "升硕率（%)",
                "completion2025": 117.54,
                "tasks0": 37.0,
                "taskscomple": 43.49
            },
            {
                "name": "升博率（%)",
                "completion2025": 100.4,
                "tasks0": 20.0,
                "taskscomple": 20.08
            },
            {
                "name": "科技厅国际合作项目（项)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "招聘博士辅导员/转岗辅导员（人）",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "省级以上与企业共建技术创新中心、工程中心、产教融合新型研发机构、地方产业研究院（个）",
                "completion2025": 100.0,
                "tasks0": 2.0,
                "taskscomple": 2.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 89.39,
                "tasks0": 1.32,
                "taskscomple": 1.18
            },
            {
                "name": "来华留学生（人）",
                "completion2025": 80.0,
                "tasks0": 20.0,
                "taskscomple": 16.0
            },
            {
                "name": "国家自科基金（项)",
                "completion2025": 78.57,
                "tasks0": 14.0,
                "taskscomple": 11.0
            },
            {
                "name": "引进拔尖人才",
                "completion2025": 66.67,
                "tasks0": 3.0,
                "taskscomple": 2.0
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 51.67,
                "tasks0": 60.0,
                "taskscomple": 31.0
            },
            {
                "name": "专业认证数（个)",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "教育部科技奖、军队国防奖、中国专利奖等（项)",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "国家级高层次人才（人)：A类(含柔性)/B类/C类",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 50.0,
                "tasks0": 4.0,
                "taskscomple": 2.0
            },
            {
                "name": "海外优青获批/申报",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 25.0,
                "tasks0": 8.0,
                "taskscomple": 2.0
            },
            {
                "name": "国家自然、技术及科技三大奖（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "新增国家级科研平台（个）",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 0.0,
                "tasks0": 65.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 142.08,
                "tasks0": 260.0,
                "taskscomple": 369.4
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 108.2,
                "tasks0": 5.0,
                "taskscomple": 5.41
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 104.6,
                "tasks0": 87.0,
                "taskscomple": 91.0
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 100.01,
                "tasks0": 91.61,
                "taskscomple": 91.62
            },
            {
                "name": "自评报告取得进校资格",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "新增部省级以上科研平台（个)",
                "completion2025": 100.0,
                "tasks0": 3.0,
                "taskscomple": 3.0
            },
            {
                "name": "引进拔尖人才",
                "completion2025": 100.0,
                "tasks0": 3.0,
                "taskscomple": 3.0
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 81.88,
                "tasks0": 48.0,
                "taskscomple": 39.3
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 71.67,
                "tasks0": 6.0,
                "taskscomple": 4.3
            },
            {
                "name": "优秀博士后人才（人）",
                "completion2025": 62.5,
                "tasks0": 8.0,
                "taskscomple": 5.0
            },
            {
                "name": "成果转化合同金额（万元）",
                "completion2025": 60.86,
                "tasks0": 1500.0,
                "taskscomple": 912.9
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 52.3,
                "tasks0": 2.256,
                "taskscomple": 1.18
            },
            {
                "name": "省级教学成果奖特等奖(项)",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "成果转化超500万项目（项）",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 40.56,
                "tasks0": 700.0,
                "taskscomple": 283.9
            },
            {
                "name": "引进优秀人才",
                "completion2025": 40.0,
                "tasks0": 5.0,
                "taskscomple": 2.0
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 38.93,
                "tasks0": 1.286,
                "taskscomple": 0.5007
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 38.16,
                "tasks0": 0.423,
                "taskscomple": 0.1614
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 32.29,
                "tasks0": 96.0,
                "taskscomple": 31.0
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 26.67,
                "tasks0": 30.0,
                "taskscomple": 8.0
            },
            {
                "name": "省部级政府奖（一等奖：全部）",
                "completion2025": 25.0,
                "tasks0": 8.0,
                "taskscomple": 2.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 16.67,
                "tasks0": 12.0,
                "taskscomple": 2.0
            },
            {
                "name": "国家级高层次人才（人)：A类(含柔性)/B类/C类",
                "completion2025": 16.67,
                "tasks0": 6.0,
                "taskscomple": 1.0
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 13.33,
                "tasks0": 15.0,
                "taskscomple": 2.0
            }
        ]
    },

    {
        "name": "环境与资源学院",
        "shortName": "环资学院",
        "tasks": [
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 683.33,
                "tasks0": 30.0,
                "taskscomple": 205.0
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 625.0,
                "tasks0": 8.0,
                "taskscomple": 50.0
            },
            {
                "name": "国家重大（重点)项目（项)",
                "completion2025": 400.0,
                "tasks0": 1.0,
                "taskscomple": 4.0
            },
            {
                "name": "国家级高层次人才（人)：A类(含柔性)/B类/C类",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 200.0,
                "tasks0": 2.0,
                "taskscomple": 4.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 193.78,
                "tasks0": 155.0,
                "taskscomple": 300.36
            },
            {
                "name": "省级以上与企业共建技术创新中心、工程中心、产教融合新型研发机构、地方产业研究院（个)",
                "completion2025": 150.0,
                "tasks0": 2.0,
                "taskscomple": 3.0
            },
            {
                "name": "来华留学生（人）",
                "completion2025": 135.0,
                "tasks0": 20.0,
                "taskscomple": 27.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 125.0,
                "tasks0": 4.0,
                "taskscomple": 5.0
            },
            {
                "name": "国家自科基金（项)",
                "completion2025": 114.29,
                "tasks0": 7.0,
                "taskscomple": 8.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 114.0,
                "tasks0": 50.0,
                "taskscomple": 57.0
            },
            {
                "name": "升硕率（%）",
                "completion2025": 106.06,
                "tasks0": 33.0,
                "taskscomple": 35.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 101.39,
                "tasks0": 0.72,
                "taskscomple": 0.73
            },
            {
                "name": "招聘博士辅导员/转岗辅导员（人）",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "海外优青获批/申报",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "专业认证数（个)",
                "completion2025": 75.0,
                "tasks0": 4.0,
                "taskscomple": 3.0
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 74.29,
                "tasks0": 35.0,
                "taskscomple": 26.0
            },
            {
                "name": "升博率（%）",
                "completion2025": 55.0,
                "tasks0": 20.0,
                "taskscomple": 11.0
            },
            {
                "name": "国家自然、技术及科技三大奖（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "教育部科技奖、军队国防奖、中国专利奖等（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进拔尖人才",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "引进优秀人才",
                "completion2025": 233.33,
                "tasks0": 3.0,
                "taskscomple": 7.0
            },
            {
                "name": "优秀博士后人才（人）",
                "completion2025": 125.0,
                "tasks0": 8.0,
                "taskscomple": 10.0
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 122.22,
                "tasks0": 9.0,
                "taskscomple": 11.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 115.52,
                "tasks0": 260.0,
                "taskscomple": 300.36
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 102.5,
                "tasks0": 200.0,
                "taskscomple": 205.0
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 100.87,
                "tasks0": 91.21,
                "taskscomple": 92.0
            },
            {
                "name": "新增部省级以上科研平台（个)",
                "completion2025": 100.0,
                "tasks0": 3.0,
                "taskscomple": 3.0
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 88.2,
                "tasks0": 50.0,
                "taskscomple": 44.1
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 83.33,
                "tasks0": 6.0,
                "taskscomple": 5.0
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 82.86,
                "tasks0": 35.0,
                "taskscomple": 29.0
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 78.85,
                "tasks0": 52.0,
                "taskscomple": 41.0
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 73.33,
                "tasks0": 0.015,
                "taskscomple": 0.011
            },
            {
                "name": "成果转化合同金额（万元）",
                "completion2025": 67.42,
                "tasks0": 500.0,
                "taskscomple": 337.1
            },
            {
                "name": "国家自科基金（项)",
                "completion2025": 61.54,
                "tasks0": 13.0,
                "taskscomple": 8.0
            },
            {
                "name": "省部级政府奖（一等奖：全部）",
                "completion2025": 60.0,
                "tasks0": 5.0,
                "taskscomple": 3.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 54.07,
                "tasks0": 1.35,
                "taskscomple": 0.73
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 51.67,
                "tasks0": 6.0,
                "taskscomple": 3.1
            },
            {
                "name": "自评报告取得进校资格",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "国家级高层次人才（人)：A类(含柔性)/B类/C类",
                "completion2025": 50.0,
                "tasks0": 4.0,
                "taskscomple": 2.0
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 44.44,
                "tasks0": 0.9,
                "taskscomple": 0.4
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 41.27,
                "tasks0": 63.0,
                "taskscomple": 26.0
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 40.8,
                "tasks0": 5.0,
                "taskscomple": 2.04
            },
            {
                "name": "引进拔尖人才",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "成果转化超500万项目（项）",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "信息与控制工程学院",
        "shortName": "信控学院",
        "tasks": [
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 490.0,
                "tasks0": 20.0,
                "taskscomple": 98.0
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 208.57,
                "tasks0": 35.0,
                "taskscomple": 73.0
            },
            {
                "name": "来华留学生（人）",
                "completion2025": 140.0,
                "tasks0": 40.0,
                "taskscomple": 56.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 139.03,
                "tasks0": 155.0,
                "taskscomple": 215.5
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 137.5,
                "tasks0": 16.0,
                "taskscomple": 22.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 114.0,
                "tasks0": 50.0,
                "taskscomple": 57.0
            },
            {
                "name": "升硕率（%）",
                "completion2025": 103.55,
                "tasks0": 33.0,
                "taskscomple": 34.17
            },
            {
                "name": "专业认证数（个)",
                "completion2025": 100.0,
                "tasks0": 2.0,
                "taskscomple": 2.0
            },
            {
                "name": "科技部国际合作重点研发计划；四川省科技厅国际科技合作项目（项)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 100.0,
                "tasks0": 4.0,
                "taskscomple": 4.0
            },
            {
                "name": "科研立项经费（亿元）",
                "completion2025": 75.58,
                "tasks0": 0.72,
                "taskscomple": 0.5442
            },
            {
                "name": "省级以上与企业共建技术创新中心、工程中心、产教融合新型研发机构、地方产业研究院（个)",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "升博率（%）",
                "completion2025": 46.6,
                "tasks0": 20.0,
                "taskscomple": 9.32
            },
            {
                "name": "国家自然科学基金项目（项)",
                "completion2025": 28.57,
                "tasks0": 7.0,
                "taskscomple": 2.0
            },
            {
                "name": "国家重大（重点)项目（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "国家自然、技术及科技三大奖（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "教育部科学技术奖、军队国防奖、中国专利奖（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "招聘博士辅导员/转岗辅导员（人）",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "国家级高层次人才（人)：A类(含柔性)/B类/C类",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 0.0,
                "tasks0": 2.0,
                "taskscomple": 0.0
            },
            {
                "name": "海外优青获批/申报",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进拔尖人才",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进优秀人才",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "成果转化超100万项目（项）",
                "completion2025": 30000.0,
                "tasks0": 1.0,
                "taskscomple": 300.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 169.0,
                "tasks0": 200.0,
                "taskscomple": 338.0
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 128.57,
                "tasks0": 7.0,
                "taskscomple": 9.0
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 115.87,
                "tasks0": 63.0,
                "taskscomple": 73.0
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 104.41,
                "tasks0": 68.0,
                "taskscomple": 71.0
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 102.4,
                "tasks0": 100.0,
                "taskscomple": 102.4
            },
            {
                "name": "省级教学成果奖一等奖(项)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "优秀博士后人才（人）",
                "completion2025": 100.0,
                "tasks0": 5.0,
                "taskscomple": 5.0
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 98.84,
                "tasks0": 95.64,
                "taskscomple": 94.53
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 82.88,
                "tasks0": 260.0,
                "taskscomple": 215.5
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 79.25,
                "tasks0": 4.0,
                "taskscomple": 3.17
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 79.0,
                "tasks0": 5.0,
                "taskscomple": 3.95
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 77.78,
                "tasks0": 45.0,
                "taskscomple": 35.0
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 67.08,
                "tasks0": 0.75,
                "taskscomple": 0.5031
            },
            {
                "name": "成果转化合同金额（万元）",
                "completion2025": 60.0,
                "tasks0": 500.0,
                "taskscomple": 300.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 57.14,
                "tasks0": 7.0,
                "taskscomple": 4.0
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 56.91,
                "tasks0": 0.375,
                "taskscomple": 0.2134
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 50.39,
                "tasks0": 1.08,
                "taskscomple": 0.5442
            },
            {
                "name": "省级产教融合示范项目中期检查、结题达优秀",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "新增部省级以上科研平台（个)",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "省部级政府奖（一等奖：全部）",
                "completion2025": 0.0,
                "tasks0": 3.0,
                "taskscomple": 0.0
            },
            {
                "name": "国家级高层次人才（人)：A类(含柔性)/B类/C类",
                "completion2025": 0.0,
                "tasks0": 4.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进拔尖人才",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进优秀人才",
                "completion2025": 0.0,
                "tasks0": 2.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "生命科学与农林学院",
        "shortName": "生命学院",
        "tasks": [
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 460.72,
                "tasks0": 120.0,
                "taskscomple": 552.86
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 350.0,
                "tasks0": 8.0,
                "taskscomple": 28.0
            },
            {
                "name": "科技厅国际合作项目（项)",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "省级以上与企业共建技术创新中心、工程中心、产教融合新型研发机构、地方产业研究院（个)",
                "completion2025": 200.0,
                "tasks0": 2.0,
                "taskscomple": 4.0
            },
            {
                "name": "升硕率",
                "completion2025": 141.57,
                "tasks0": 30.0,
                "taskscomple": 42.47
            },
            {
                "name": "升博率",
                "completion2025": 140.5,
                "tasks0": 20.0,
                "taskscomple": 28.1
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 123.33,
                "tasks0": 30.0,
                "taskscomple": 37.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 100.0,
                "tasks0": 4.0,
                "taskscomple": 4.0
            },
            {
                "name": "招聘博士辅导员/转岗辅导员（人）",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "国家级高层次人才（人) ：A类(含柔性)/B类/C类",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 100.0,
                "tasks0": 2.0,
                "taskscomple": 2.0
            },
            {
                "name": "海外优青获批/申报",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "引进拔尖人才",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "来华留学生（人）",
                "completion2025": 84.44,
                "tasks0": 45.0,
                "taskscomple": 38.0
            },
            {
                "name": "国家自然基金（项)",
                "completion2025": 71.43,
                "tasks0": 7.0,
                "taskscomple": 5.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 67.46,
                "tasks0": 0.72,
                "taskscomple": 0.4857
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 35.75,
                "tasks0": 40.0,
                "taskscomple": 14.3
            },
            {
                "name": "教育部科技奖、军队国防奖、中国专利奖等（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 0.0,
                "tasks0": 105.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "引进拔尖人才",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "成果转化超100万项目（项）",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 97.61,
                "tasks0": 93.87,
                "taskscomple": 91.63
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 81.64,
                "tasks0": 100.0,
                "taskscomple": 81.64
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 68.52,
                "tasks0": 54.0,
                "taskscomple": 37.0
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 68.18,
                "tasks0": 22.0,
                "taskscomple": 15.0
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 67.0,
                "tasks0": 5.0,
                "taskscomple": 3.35
            },
            {
                "name": "省部级政府奖（一等奖：全部）",
                "completion2025": 66.67,
                "tasks0": 3.0,
                "taskscomple": 2.0
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 62.5,
                "tasks0": 32.0,
                "taskscomple": 20.0
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 59.46,
                "tasks0": 0.705,
                "taskscomple": 0.419213
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 57.14,
                "tasks0": 7.0,
                "taskscomple": 4.0
            },
            {
                "name": "省级教学成果奖特等奖(项)",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "新增部省级以上科研平台（个)",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 44.97,
                "tasks0": 1.08,
                "taskscomple": 0.485716
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 30.33,
                "tasks0": 6.0,
                "taskscomple": 1.82
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 28.57,
                "tasks0": 7.0,
                "taskscomple": 2.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 7.15,
                "tasks0": 200.0,
                "taskscomple": 14.3
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 0.0,
                "tasks0": 0.045,
                "taskscomple": 0.0
            },
            {
                "name": "国家自然、技术及科技三大奖（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "新增国家级科研平台（个)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "国家级高层次人才（人) ：A类(含柔性)/B类/C类",
                "completion2025": 0.0,
                "tasks0": 4.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进优秀人才",
                "completion2025": 0.0,
                "tasks0": 2.0,
                "taskscomple": 0.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 0.0,
                "tasks0": 260.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "制造科学与工程学院",
        "shortName": "制造学院",
        "tasks": [
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 418.75,
                "tasks0": 16.0,
                "taskscomple": 67.0
            },
            {
                "name": "招聘博士辅导员/转岗辅导员（人）",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 105.0,
                "tasks0": 20.0,
                "taskscomple": 21.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 103.75,
                "tasks0": 0.36,
                "taskscomple": 0.3735
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 100.0,
                "tasks0": 2.0,
                "taskscomple": 2.0
            },
            {
                "name": "引进优秀人才",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "升硕率（%）",
                "completion2025": 75.96,
                "tasks0": 28.0,
                "taskscomple": 21.27
            },
            {
                "name": "升博率（%）",
                "completion2025": 67.5,
                "tasks0": 20.0,
                "taskscomple": 13.5
            },
            {
                "name": "专业认证数（个)",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 50.0,
                "tasks0": 30.0,
                "taskscomple": 15.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "省级以上与企业共建技术创新中心、工程中心、产教融合新型研发机构、地方产业研究院（个)",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "国家自科基金（项)",
                "completion2025": 42.86,
                "tasks0": 7.0,
                "taskscomple": 3.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 25.0,
                "tasks0": 4.0,
                "taskscomple": 1.0
            },
            {
                "name": "来华留学生（人）",
                "completion2025": 15.0,
                "tasks0": 20.0,
                "taskscomple": 3.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 11.4,
                "tasks0": 50.0,
                "taskscomple": 5.7
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 2.46,
                "tasks0": 85.0,
                "taskscomple": 2.088
            },
            {
                "name": "国家自然、技术及科技三大奖（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "新增国家级科研平台（个)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "海外优青获批/申报",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进拔尖人才",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "高水平论文（篇）",
                "completion2025": 150.0,
                "tasks0": 12.0,
                "taskscomple": 18.0
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 131.0,
                "tasks0": 5.0,
                "taskscomple": 6.55
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 102.82,
                "tasks0": 90.72,
                "taskscomple": 93.28
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 97.6,
                "tasks0": 125.0,
                "taskscomple": 122.0
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 89.8,
                "tasks0": 49.0,
                "taskscomple": 44.0
            },
            {
                "name": "国家级高层次人才： A类(含柔性)/B类/C类",
                "completion2025": 75.0,
                "tasks0": 4.0,
                "taskscomple": 3.0
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 63.05,
                "tasks0": 0.105,
                "taskscomple": 0.0662
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 60.73,
                "tasks0": 0.615,
                "taskscomple": 0.3735
            },
            {
                "name": "省级教学成果奖特等奖(项)",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "省部级政府奖（一等奖：全部）",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "新增部省级以上科研平台（个)",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 48.33,
                "tasks0": 6.0,
                "taskscomple": 2.9
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 42.13,
                "tasks0": 0.465,
                "taskscomple": 0.1959
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 28.57,
                "tasks0": 7.0,
                "taskscomple": 2.0
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 27.78,
                "tasks0": 54.0,
                "taskscomple": 15.0
            },
            {
                "name": "成果转化合同金额（万元）",
                "completion2025": 20.2,
                "tasks0": 500.0,
                "taskscomple": 101.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 10.5,
                "tasks0": 200.0,
                "taskscomple": 21.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 0.8,
                "tasks0": 260.0,
                "taskscomple": 2.088
            }
        ]
    },

    {
        "name": "国防科技学院核科学技术学院",
        "shortName": "国防学院",
        "tasks": [
            {
                "name": "高水平学术专著（本)",
                "completion2025": 400.0,
                "tasks0": 1.0,
                "taskscomple": 4.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 352.78,
                "tasks0": 18.0,
                "taskscomple": 63.5
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 300.0,
                "tasks0": 1.0,
                "taskscomple": 3.0
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 257.14,
                "tasks0": 7.0,
                "taskscomple": 18.0
            },
            {
                "name": "升博率（%）",
                "completion2025": 200.0,
                "tasks0": 15.0,
                "taskscomple": 30.0
            },
            {
                "name": "教育部科技奖、军队国防奖、中国专利奖等（项)",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 150.0,
                "tasks0": 14.0,
                "taskscomple": 21.0
            },
            {
                "name": "专业认证数（个)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "国家自科基金（项)",
                "completion2025": 100.0,
                "tasks0": 4.0,
                "taskscomple": 4.0
            },
            {
                "name": "国家级高层次人才（人)：A类(含柔性)/B类/C类",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "升硕率（%）",
                "completion2025": 83.78,
                "tasks0": 37.0,
                "taskscomple": 31.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 72.09,
                "tasks0": 0.43,
                "taskscomple": 0.31
            },
            {
                "name": "招聘博士辅导员/转岗辅导员（人）",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "海外优青获批/申报",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进优秀人才",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "来华留学生（人）",
                "completion2025": 0.0,
                "tasks0": 10.0,
                "taskscomple": 0.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 0.0,
                "tasks0": 45.0,
                "taskscomple": 0.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 0.0,
                "tasks0": 55.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "引进拔尖人才",
                "completion2025": 300.0,
                "tasks0": 1.0,
                "taskscomple": 3.0
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 205.0,
                "tasks0": 4.0,
                "taskscomple": 8.2
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 200.0,
                "tasks0": 2.0,
                "taskscomple": 4.0
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 150.0,
                "tasks0": 2.0,
                "taskscomple": 3.0
            },
            {
                "name": "自评报告取得进校资格",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "省级教学成果奖特等奖(项)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "新增部省级以上科研平台（个）",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 98.8,
                "tasks0": 94.08,
                "taskscomple": 92.95
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 90.7,
                "tasks0": 43.0,
                "taskscomple": 39.0
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 87.5,
                "tasks0": 24.0,
                "taskscomple": 21.0
            },
            {
                "name": "国家自科基金（项)",
                "completion2025": 80.0,
                "tasks0": 5.0,
                "taskscomple": 4.0
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 76.12,
                "tasks0": 32.0,
                "taskscomple": 24.36
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 54.5,
                "tasks0": 6.0,
                "taskscomple": 3.27
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 50.0,
                "tasks0": 0.14,
                "taskscomple": 0.07
            },
            {
                "name": "引进优秀人才",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 47.69,
                "tasks0": 0.65,
                "taskscomple": 0.31
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 44.19,
                "tasks0": 0.43,
                "taskscomple": 0.19
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 40.0,
                "tasks0": 5.0,
                "taskscomple": 2.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 35.28,
                "tasks0": 180.0,
                "taskscomple": 63.5
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 25.93,
                "tasks0": 27.0,
                "taskscomple": 7.0
            },
            {
                "name": "国家级高层次人才（人)：A类(含柔性)/B类/C类",
                "completion2025": 25.0,
                "tasks0": 4.0,
                "taskscomple": 1.0
            },
            {
                "name": "成果转化合同金额（万元）",
                "completion2025": 4.96,
                "tasks0": 450.0,
                "taskscomple": 22.3
            },
            {
                "name": "省部级政府奖（一等奖：全部）",
                "completion2025": 0.0,
                "tasks0": 3.0,
                "taskscomple": 0.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 0.0,
                "tasks0": 80.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "土木工程与建筑学院",
        "shortName": "土建学院",
        "tasks": [
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 600.0,
                "tasks0": 8.0,
                "taskscomple": 48.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 400.0,
                "tasks0": 1.0,
                "taskscomple": 4.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 369.69,
                "tasks0": 65.0,
                "taskscomple": 240.3
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 312.35,
                "tasks0": 17.0,
                "taskscomple": 53.1
            },
            {
                "name": "引进学术骨干",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "升硕率（%)",
                "completion2025": 111.46,
                "tasks0": 24.0,
                "taskscomple": 26.75
            },
            {
                "name": "专业认证数（个)",
                "completion2025": 100.0,
                "tasks0": 3.0,
                "taskscomple": 3.0
            },
            {
                "name": "国家自科/社科基金项目（项)",
                "completion2025": 100.0,
                "tasks0": 4.0,
                "taskscomple": 4.0
            },
            {
                "name": "招聘博士辅导员/转岗辅导员（人）",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "引进优秀人才",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 78.85,
                "tasks0": 0.52,
                "taskscomple": 0.41
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 74.53,
                "tasks0": 103.0,
                "taskscomple": 76.77
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 69.23,
                "tasks0": 26.0,
                "taskscomple": 18.0
            },
            {
                "name": "升博率（%)",
                "completion2025": 50.0,
                "tasks0": 15.0,
                "taskscomple": 7.5
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "来华留学生（人）",
                "completion2025": 0.0,
                "tasks0": 30.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "省部级政府奖（一等奖：全部）",
                "completion2025": 400.0,
                "tasks0": 2.0,
                "taskscomple": 8.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 267.0,
                "tasks0": 90.0,
                "taskscomple": 240.3
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 200.0,
                "tasks0": 2.0,
                "taskscomple": 4.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 175.0,
                "tasks0": 4.0,
                "taskscomple": 7.0
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 126.47,
                "tasks0": 34.0,
                "taskscomple": 43.0
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 100.08,
                "tasks0": 91.15,
                "taskscomple": 91.22
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 100.0,
                "tasks0": 0.33,
                "taskscomple": 0.33
            },
            {
                "name": "国家自科/社科基金项目（项)",
                "completion2025": 100.0,
                "tasks0": 4.0,
                "taskscomple": 4.0
            },
            {
                "name": "新增部省级以上科研平台（个）",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "引进优秀人才",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 97.33,
                "tasks0": 6.0,
                "taskscomple": 5.84
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 93.68,
                "tasks0": 95.0,
                "taskscomple": 89.0
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 63.79,
                "tasks0": 0.058,
                "taskscomple": 0.037
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 62.5,
                "tasks0": 4.0,
                "taskscomple": 2.5
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 58.57,
                "tasks0": 0.7,
                "taskscomple": 0.41
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 42.86,
                "tasks0": 42.0,
                "taskscomple": 18.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 41.16,
                "tasks0": 129.0,
                "taskscomple": 53.1
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 26.09,
                "tasks0": 23.0,
                "taskscomple": 6.0
            },
            {
                "name": "成果转化合同金额（万元）",
                "completion2025": 20.58,
                "tasks0": 258.0,
                "taskscomple": 53.1
            },
            {
                "name": "国家级高层次人才： A类(含柔性)/B类/C类",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进拔尖人才",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "成果转化超100万项目（项）",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "计算机科学与技术学院",
        "shortName": "计算机学院",
        "tasks": [
            {
                "name": "学生大赛获奖数（项）[A+省三等及以上；A、B、C国奖]（项）",
                "completion2025": 450.0,
                "tasks0": 16.0,
                "taskscomple": 72.0
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备）",
                "completion2025": 300.0,
                "tasks0": 1.0,
                "taskscomple": 3.0
            },
            {
                "name": "授权发明专利数（项）",
                "completion2025": 160.0,
                "tasks0": 15.0,
                "taskscomple": 24.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 113.91,
                "tasks0": 80.0,
                "taskscomple": 91.129
            },
            {
                "name": "来华留学生（人）",
                "completion2025": 104.0,
                "tasks0": 100.0,
                "taskscomple": 104.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 103.52,
                "tasks0": 55.0,
                "taskscomple": 56.935
            },
            {
                "name": "专业认证数（个）",
                "completion2025": 100.0,
                "tasks0": 2.0,
                "taskscomple": 2.0
            },
            {
                "name": "国家自科基金（项)",
                "completion2025": 100.0,
                "tasks0": 4.0,
                "taskscomple": 4.0
            },
            {
                "name": "新增部省级以上科研平台（个)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "引进优秀人才",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "升硕率（%）",
                "completion2025": 74.08,
                "tasks0": 25.0,
                "taskscomple": 18.52
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 66.44,
                "tasks0": 0.36,
                "taskscomple": 0.2392
            },
            {
                "name": "升博率（%）",
                "completion2025": 55.17,
                "tasks0": 15.0,
                "taskscomple": 8.276
            },
            {
                "name": "成果转化到校资金（万元）",
                "completion2025": 50.0,
                "tasks0": 20.0,
                "taskscomple": 10.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "招聘博士辅导员/转岗辅导员（人）",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "高水平论文（篇）",
                "completion2025": 285.71,
                "tasks0": 7.0,
                "taskscomple": 20.0
            },
            {
                "name": "学生大赛获奖数（项）[A+省三等及以上；A、B、C国奖]（项）",
                "completion2025": 123.08,
                "tasks0": 52.0,
                "taskscomple": 64.0
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 102.29,
                "tasks0": 90.39,
                "taskscomple": 92.46
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 101.25,
                "tasks0": 90.0,
                "taskscomple": 91.129
            },
            {
                "name": "引进优秀人才",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 98.15,
                "tasks0": 155.0,
                "taskscomple": 152.14
            },
            {
                "name": "授权发明专利数（项）",
                "completion2025": 96.0,
                "tasks0": 25.0,
                "taskscomple": 24.0
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 71.96,
                "tasks0": 0.0675,
                "taskscomple": 0.04857
            },
            {
                "name": "成果转化到校资金（万元）",
                "completion2025": 66.67,
                "tasks0": 150.0,
                "taskscomple": 100.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 63.26,
                "tasks0": 90.0,
                "taskscomple": 56.935
            },
            {
                "name": "新增部省级以上科研平台（个)",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "计算机学院教育部重点实验室（B类）建设",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 49.22,
                "tasks0": 0.486,
                "taskscomple": 0.2392
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 45.6,
                "tasks0": 5.0,
                "taskscomple": 2.28
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 42.98,
                "tasks0": 0.473,
                "taskscomple": 0.2033
            },
            {
                "name": "成果转化合同金额（万元）",
                "completion2025": 33.33,
                "tasks0": 300.0,
                "taskscomple": 100.0
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 26.0,
                "tasks0": 4.0,
                "taskscomple": 1.04
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 25.0,
                "tasks0": 4.0,
                "taskscomple": 1.0
            },
            {
                "name": "省级产教融合示范项目中期检查、结题达优秀",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "省部级政府奖（一等奖：全部）",
                "completion2025": 0.0,
                "tasks0": 0.0,
                "taskscomple": 2.0
            },
            {
                "name": "国家级高层次人才： A类(含柔性)/B类/C类",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进拔尖人才",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "数理学院",
        "shortName": "数理学院",
        "tasks": [
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 540.0,
                "tasks0": 10.0,
                "taskscomple": 54.0
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 241.67,
                "tasks0": 12.0,
                "taskscomple": 29.0
            },
            {
                "name": "引进优秀人才",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "新增部省级以上科研平台（个)",
                "completion2025": 150.0,
                "tasks0": 1.0,
                "taskscomple": 1.5
            },
            {
                "name": "升博率（%)",
                "completion2025": 123.33,
                "tasks0": 15.0,
                "taskscomple": 18.5
            },
            {
                "name": "升硕率（%)",
                "completion2025": 110.21,
                "tasks0": 24.0,
                "taskscomple": 26.45
            },
            {
                "name": "国家自科基金（项)",
                "completion2025": 100.0,
                "tasks0": 4.0,
                "taskscomple": 4.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "专业认证数（个)",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 47.62,
                "tasks0": 0.24,
                "taskscomple": 0.1143
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 40.0,
                "tasks0": 10.0,
                "taskscomple": 4.0
            },
            {
                "name": "来华留学生（人）",
                "completion2025": 40.0,
                "tasks0": 10.0,
                "taskscomple": 4.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 13.6,
                "tasks0": 50.0,
                "taskscomple": 6.8
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 3.43,
                "tasks0": 35.0,
                "taskscomple": 1.2
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进拔尖人才",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "成果转化合同金额（万元）",
                "completion2025": 270.0,
                "tasks0": 50.0,
                "taskscomple": 135.0
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 241.6,
                "tasks0": 5.0,
                "taskscomple": 12.08
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 180.0,
                "tasks0": 30.0,
                "taskscomple": 54.0
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 116.0,
                "tasks0": 25.0,
                "taskscomple": 29.0
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 105.75,
                "tasks0": 0.04,
                "taskscomple": 0.0423
            },
            {
                "name": "省部级政府奖（一等奖：全部）",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 96.57,
                "tasks0": 94.67,
                "taskscomple": 91.42
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 91.67,
                "tasks0": 60.0,
                "taskscomple": 55.0
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 85.0,
                "tasks0": 20.0,
                "taskscomple": 17.0
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 67.42,
                "tasks0": 0.13,
                "taskscomple": 0.08765
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 50.0,
                "tasks0": 4.0,
                "taskscomple": 2.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 47.62,
                "tasks0": 0.24,
                "taskscomple": 0.1143
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 45.67,
                "tasks0": 6.0,
                "taskscomple": 2.74
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 33.33,
                "tasks0": 12.0,
                "taskscomple": 4.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 1.5,
                "tasks0": 80.0,
                "taskscomple": 1.2
            },
            {
                "name": "省级教学成果奖一等奖(项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "航空航天学院",
        "shortName": "航空航天学院",
        "tasks": [
            {
                "name": "升硕率（%)",
                "completion2025": 166.67,
                "tasks0": 24.0,
                "taskscomple": 40.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 144.88,
                "tasks0": 0.08,
                "taskscomple": 0.1159
            },
            {
                "name": "引进学术骨干",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 50.0,
                "tasks0": 4.0,
                "taskscomple": 2.0
            },
            {
                "name": "升博率（%)",
                "completion2025": 0.0,
                "tasks0": 15.0,
                "taskscomple": 0.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 0.0,
                "tasks0": 3.0,
                "taskscomple": 0.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 0.0,
                "tasks0": 20.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 150.0,
                "tasks0": 4.0,
                "taskscomple": 6.0
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 125.0,
                "tasks0": 4.0,
                "taskscomple": 5.0
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 107.52,
                "tasks0": 91.15,
                "taskscomple": 98.0
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 107.5,
                "tasks0": 4.0,
                "taskscomple": 4.3
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 105.36,
                "tasks0": 0.11,
                "taskscomple": 0.1159
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 105.21,
                "tasks0": 0.048,
                "taskscomple": 0.0505
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 100.53,
                "tasks0": 95.0,
                "taskscomple": 95.5
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 37.58,
                "tasks0": 0.0095,
                "taskscomple": 0.00357
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 28.57,
                "tasks0": 7.0,
                "taskscomple": 2.0
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 26.67,
                "tasks0": 6.0,
                "taskscomple": 1.6
            },
            {
                "name": "国家自科基金（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 0.0,
                "tasks0": 21.0,
                "taskscomple": 0.0
            },
            {
                "name": "成果转化合同金额（万元）",
                "completion2025": 0.0,
                "tasks0": 42.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "医学院",
        "shortName": "医学院",
        "tasks": [
            {
                "name": "高水平学术专著（本)",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "授权发明专利（项)",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "升硕率（%)",
                "completion2025": 60.68,
                "tasks0": 25.0,
                "taskscomple": 15.17
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 48.39,
                "tasks0": 0.056,
                "taskscomple": 0.0271
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 0.0,
                "tasks0": 2.0,
                "taskscomple": 0.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 0.0,
                "tasks0": 5.0,
                "taskscomple": 0.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 0.0,
                "tasks0": 36.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 205.0,
                "tasks0": 4.0,
                "taskscomple": 8.2
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 104.65,
                "tasks0": 90.39,
                "taskscomple": 94.59
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 71.43,
                "tasks0": 7.0,
                "taskscomple": 5.0
            },
            {
                "name": "授权发明专利（项)",
                "completion2025": 66.67,
                "tasks0": 3.0,
                "taskscomple": 2.0
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 60.4,
                "tasks0": 5.0,
                "taskscomple": 3.02
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 38.71,
                "tasks0": 155.0,
                "taskscomple": 60.0
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 38.45,
                "tasks0": 0.058,
                "taskscomple": 0.0223
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 33.83,
                "tasks0": 0.0801,
                "taskscomple": 0.0271
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 0.0,
                "tasks0": 14.0,
                "taskscomple": 0.0
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 0.0,
                "tasks0": 0.01,
                "taskscomple": 0.0
            },
            {
                "name": "国家自科基金（项))",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "高水平智库成果（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 0.0,
                "tasks0": 20.0,
                "taskscomple": 0.0
            },
            {
                "name": "成果转化合同金额（万元）",
                "completion2025": 0.0,
                "tasks0": 50.0,
                "taskscomple": 0.0
            }
        ]
    }

];

// 2. 人文社科类及其他学院
const humanityColleges = [
    {
        "name": "马克思主义学院",
        "shortName": "马克思主义学院",
        "tasks": [
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 166.67,
                "tasks0": 3.0,
                "taskscomple": 5.0
            },
            {
                "name": "升硕率（%)",
                "completion2025": 102.78,
                "tasks0": 36.0,
                "taskscomple": 37.0
            },
            {
                "name": "专业认证数（个)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "国家自科基金（项)",
                "completion2025": 100.0,
                "tasks0": 2.0,
                "taskscomple": 2.0
            },
            {
                "name": "高水平智库成果（项)",
                "completion2025": 100.0,
                "tasks0": 2.0,
                "taskscomple": 2.0
            },
            {
                "name": "省级哲学社会科学优秀成果获奖（项)[一等奖；全部]",
                "completion2025": 100.0,
                "tasks0": 2.0,
                "taskscomple": 2.0
            },
            {
                "name": "建成四川省哲学社会科学重点研究基地（个)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 100.0,
                "tasks0": 60.0,
                "taskscomple": 60.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 80.62,
                "tasks0": 0.021,
                "taskscomple": 0.01693
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 22.0,
                "tasks0": 20.0,
                "taskscomple": 4.4
            },
            {
                "name": "升博率（%)",
                "completion2025": 0.0,
                "tasks0": 15.0,
                "taskscomple": 0.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 0.0,
                "tasks0": 5.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 150.67,
                "tasks0": 3.0,
                "taskscomple": 4.52
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 136.0,
                "tasks0": 1.0,
                "taskscomple": 1.36
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 114.29,
                "tasks0": 7.0,
                "taskscomple": 8.0
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 105.03,
                "tasks0": 90.71,
                "taskscomple": 95.27
            },
            {
                "name": "省级教学成果奖一等奖(项)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 96.5,
                "tasks0": 200.0,
                "taskscomple": 193.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 49.79,
                "tasks0": 0.034,
                "taskscomple": 0.01693
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 41.82,
                "tasks0": 0.028,
                "taskscomple": 0.01171
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 33.33,
                "tasks0": 12.0,
                "taskscomple": 4.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 17.6,
                "tasks0": 25.0,
                "taskscomple": 4.4
            },
            {
                "name": "引进优秀人才",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "经济管理学院",
        "shortName": "经管学院",
        "tasks": [
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 583.33,
                "tasks0": 12.0,
                "taskscomple": 70.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 400.0,
                "tasks0": 25.0,
                "taskscomple": 100.0
            },
            {
                "name": "国家自科/社科基金（项)",
                "completion2025": 200.0,
                "tasks0": 2.0,
                "taskscomple": 4.0
            },
            {
                "name": "高水平智库成果（项)",
                "completion2025": 200.0,
                "tasks0": 2.0,
                "taskscomple": 4.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 135.29,
                "tasks0": 170.0,
                "taskscomple": 230.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 107.5,
                "tasks0": 0.076,
                "taskscomple": 0.0817
            },
            {
                "name": "升硕率（%)",
                "completion2025": 105.78,
                "tasks0": 23.0,
                "taskscomple": 24.33
            },
            {
                "name": "专业认证数（个)",
                "completion2025": 100.0,
                "tasks0": 5.0,
                "taskscomple": 5.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 100.0,
                "tasks0": 5.0,
                "taskscomple": 5.0
            },
            {
                "name": "招聘博士辅导员/转岗辅导员（人）",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "省级哲学社会科学优秀成果获奖（项)[一等奖；全部]",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "来华留学生（人）",
                "completion2025": 38.0,
                "tasks0": 50.0,
                "taskscomple": 19.0
            },
            {
                "name": "升博率（%)",
                "completion2025": 28.0,
                "tasks0": 15.0,
                "taskscomple": 4.2
            }
        ],
        "comparisonTasks": [
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 525.0,
                "tasks0": 20.0,
                "taskscomple": 105.0
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 225.0,
                "tasks0": 2.0,
                "taskscomple": 4.5
            },
            {
                "name": "引进优秀人才",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 141.33,
                "tasks0": 3.0,
                "taskscomple": 4.24
            },
            {
                "name": "国家自科/社科基金（项)",
                "completion2025": 133.33,
                "tasks0": 3.0,
                "taskscomple": 4.0
            },
            {
                "name": "高水平智库成果（项)",
                "completion2025": 133.33,
                "tasks0": 3.0,
                "taskscomple": 4.0
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 128.57,
                "tasks0": 49.0,
                "taskscomple": 63.0
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 126.32,
                "tasks0": 19.0,
                "taskscomple": 24.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 125.0,
                "tasks0": 80.0,
                "taskscomple": 100.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 115.0,
                "tasks0": 200.0,
                "taskscomple": 230.0
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 100.11,
                "tasks0": 94.1,
                "taskscomple": 94.2
            },
            {
                "name": "引进学术骨干",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 66.42,
                "tasks0": 0.123,
                "taskscomple": 0.0817
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 0.0,
                "tasks0": 0.103,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "外国语学院",
        "shortName": "外语学院",
        "tasks": [
            {
                "name": "来华留学生（人）",
                "completion2025": 260.0,
                "tasks0": 5.0,
                "taskscomple": 13.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 240.0,
                "tasks0": 5.0,
                "taskscomple": 12.0
            },
            {
                "name": "专业认证数（个)",
                "completion2025": 100.0,
                "tasks0": 2.0,
                "taskscomple": 2.0
            },
            {
                "name": "招聘博士辅导员/转岗辅导员（人）",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 100.0,
                "tasks0": 5.0,
                "taskscomple": 5.0
            },
            {
                "name": "升硕率（%)",
                "completion2025": 73.71,
                "tasks0": 31.0,
                "taskscomple": 22.85
            },
            {
                "name": "省级哲学社会科学优秀成果获奖（项)[一等奖；全部]",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 48.91,
                "tasks0": 0.011,
                "taskscomple": 0.00538
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 33.33,
                "tasks0": 6.0,
                "taskscomple": 2.0
            },
            {
                "name": "升博率（%)",
                "completion2025": 6.67,
                "tasks0": 15.0,
                "taskscomple": 1.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 2.4,
                "tasks0": 50.0,
                "taskscomple": 1.2
            },
            {
                "name": "国家社科基金项目（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 148.0,
                "tasks0": 1.0,
                "taskscomple": 1.48
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 133.33,
                "tasks0": 6.0,
                "taskscomple": 8.0
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 131.5,
                "tasks0": 2.0,
                "taskscomple": 2.63
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 98.65,
                "tasks0": 92.06,
                "taskscomple": 90.82
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 86.69,
                "tasks0": 145.0,
                "taskscomple": 125.7
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 48.0,
                "tasks0": 25.0,
                "taskscomple": 12.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 30.22,
                "tasks0": 0.0178,
                "taskscomple": 0.00538
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 20.0,
                "tasks0": 25.0,
                "taskscomple": 5.0
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 0.0,
                "tasks0": 0.015,
                "taskscomple": 0.0
            },
            {
                "name": "高水平智库成果（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进优秀人才",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "文学与艺术学院",
        "shortName": "文艺学院",
        "tasks": [
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 650.0,
                "tasks0": 8.0,
                "taskscomple": 52.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 366.67,
                "tasks0": 3.0,
                "taskscomple": 11.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 124.62,
                "tasks0": 13.0,
                "taskscomple": 16.2
            },
            {
                "name": "来华留学生（人）",
                "completion2025": 110.0,
                "tasks0": 30.0,
                "taskscomple": 33.0
            },
            {
                "name": "专业认证数（个)",
                "completion2025": 100.0,
                "tasks0": 3.0,
                "taskscomple": 3.0
            },
            {
                "name": "国家社科基金项目（项)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "招聘博士辅导员/转岗辅导员（人）",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 72.0,
                "tasks0": 0.025,
                "taskscomple": 0.018
            },
            {
                "name": "升硕率（%)",
                "completion2025": 54.96,
                "tasks0": 25.0,
                "taskscomple": 13.74
            },
            {
                "name": "省级哲学社会科学优秀成果获奖（项)[一等奖；全部]",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 22.74,
                "tasks0": 50.0,
                "taskscomple": 11.37
            },
            {
                "name": "升博率（%)",
                "completion2025": 0.0,
                "tasks0": 15.0,
                "taskscomple": 0.0
            },
            {
                "name": "入选国家哲学社会科学文库（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "高水平论文（篇）",
                "completion2025": 140.0,
                "tasks0": 10.0,
                "taskscomple": 14.0
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 101.06,
                "tasks0": 90.03,
                "taskscomple": 90.98
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 100.0,
                "tasks0": 59.0,
                "taskscomple": 59.0
            },
            {
                "name": "引进优秀人才",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 79.63,
                "tasks0": 112.0,
                "taskscomple": 89.19
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 77.0,
                "tasks0": 5.0,
                "taskscomple": 3.85
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 64.8,
                "tasks0": 25.0,
                "taskscomple": 16.2
            },
            {
                "name": "国家社科基金项目（项)",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "省级哲学社会科学优秀成果获奖（项)[一等奖；全部]",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 45.0,
                "tasks0": 0.04,
                "taskscomple": 0.018
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 35.25,
                "tasks0": 4.0,
                "taskscomple": 1.41
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 0.0,
                "tasks0": 0.034,
                "taskscomple": 0.0
            },
            {
                "name": "智库成果",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "法学院",
        "shortName": "法学院",
        "tasks": [
            {
                "name": "高水平智库成果（项)",
                "completion2025": 1400.0,
                "tasks0": 1.0,
                "taskscomple": 14.0
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 400.0,
                "tasks0": 1.0,
                "taskscomple": 4.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 300.0,
                "tasks0": 2.0,
                "taskscomple": 6.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 138.2,
                "tasks0": 89.0,
                "taskscomple": 123.0
            },
            {
                "name": "专业认证数（个)",
                "completion2025": 100.0,
                "tasks0": 2.0,
                "taskscomple": 2.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 63.44,
                "tasks0": 0.018,
                "taskscomple": 0.01142
            },
            {
                "name": "国家社科基金项目（项)",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "省级哲学社会科学优秀成果获奖（项)[一等奖；全部]",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 30.77,
                "tasks0": 13.0,
                "taskscomple": 4.0
            },
            {
                "name": "来华留学生（人）",
                "completion2025": 20.0,
                "tasks0": 5.0,
                "taskscomple": 1.0
            },
            {
                "name": "升博率（%)",
                "completion2025": 18.67,
                "tasks0": 15.0,
                "taskscomple": 2.8
            },
            {
                "name": "升硕率（%)",
                "completion2025": 13.79,
                "tasks0": 29.0,
                "taskscomple": 4.0
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "高水平智库成果（项)",
                "completion2025": 700.0,
                "tasks0": 2.0,
                "taskscomple": 14.0
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 180.0,
                "tasks0": 3.0,
                "taskscomple": 5.4
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 103.33,
                "tasks0": 90.0,
                "taskscomple": 93.0
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 102.72,
                "tasks0": 90.75,
                "taskscomple": 93.22
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 71.43,
                "tasks0": 7.0,
                "taskscomple": 5.0
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 65.0,
                "tasks0": 2.0,
                "taskscomple": 1.3
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 45.92,
                "tasks0": 0.024,
                "taskscomple": 0.01102
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 44.44,
                "tasks0": 9.0,
                "taskscomple": 4.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 39.79,
                "tasks0": 0.0287,
                "taskscomple": 0.01142
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 16.0,
                "tasks0": 25.0,
                "taskscomple": 4.0
            },
            {
                "name": "引进优秀人才",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "体育与健康学院",
        "shortName": "体健学院",
        "tasks": [
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 113.0,
                "tasks0": 100.0,
                "taskscomple": 113.0
            },
            {
                "name": "专业认证数（个)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "升硕率（%)",
                "completion2025": 63.61,
                "tasks0": 23.0,
                "taskscomple": 14.63
            },
            {
                "name": "来华留学生（人）",
                "completion2025": 20.0,
                "tasks0": 5.0,
                "taskscomple": 1.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 12.57,
                "tasks0": 0.007,
                "taskscomple": 0.00088
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 0.0,
                "tasks0": 5.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 92.53,
                "tasks0": 97.35,
                "taskscomple": 90.08
            },
            {
                "name": "第一志愿研究生上线人数占招生计划比（%）",
                "completion2025": 50.0,
                "tasks0": 100.0,
                "taskscomple": 50.0
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 33.33,
                "tasks0": 3.0,
                "taskscomple": 1.0
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 9.78,
                "tasks0": 0.009,
                "taskscomple": 0.00088
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 7.79,
                "tasks0": 0.0113,
                "taskscomple": 0.00088
            },
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 6.8,
                "tasks0": 5.0,
                "taskscomple": 0.34
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 0.0,
                "tasks0": 6.0,
                "taskscomple": 0.0
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 0.0,
                "tasks0": 4.0,
                "taskscomple": 0.0
            },
            {
                "name": "国家社科基金项目（项)",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "省级哲学社会科学优秀成果获奖（项)[一等奖；全部]",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 0.0,
                "tasks0": 15.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "应用技术学院",
        "shortName": "应技学院",
        "tasks": [
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 600.0,
                "tasks0": 1.0,
                "taskscomple": 6.0
            },
            {
                "name": "升硕率（%)",
                "completion2025": 155.0,
                "tasks0": 4.0,
                "taskscomple": 6.2
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 140.0,
                "tasks0": 5.0,
                "taskscomple": 7.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 122.5,
                "tasks0": 80.0,
                "taskscomple": 98.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "四级通过率提升百分点（%）",
                "completion2025": 104.4,
                "tasks0": 5.0,
                "taskscomple": 5.22
            },
            {
                "name": "毕业生初次去向落实率（%）",
                "completion2025": 100.12,
                "tasks0": 85.09,
                "taskscomple": 85.19
            },
            {
                "name": "学生大赛获奖数（项)[A+省三等及以上；A、B、C国奖]",
                "completion2025": 50.0,
                "tasks0": 4.0,
                "taskscomple": 2.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 46.67,
                "tasks0": 15.0,
                "taskscomple": 7.0
            },
            {
                "name": "六级通过率提升百分点（%）",
                "completion2025": 28.17,
                "tasks0": 6.0,
                "taskscomple": 1.69
            },
            {
                "name": "升硕率（%)",
                "completion2025": 0.0,
                "tasks0": 4.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "继续教育学院",
        "shortName": "继教学院",
        "tasks": [
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 107.61,
                "tasks0": 200.0,
                "taskscomple": 215.217
            }
        ],
        "comparisonTasks": [
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 97.83,
                "tasks0": 220.0,
                "taskscomple": 215.217
            }
        ]
    },
];

// 3. 独立平台
const platformColleges = [
    {
        "name": "工程技术中心",
        "shortName": "工程中心",
        "tasks": [
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 118.33,
                "tasks0": 0.006,
                "taskscomple": 0.0071
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 71.67,
                "tasks0": 3.0,
                "taskscomple": 2.15
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 56.81,
                "tasks0": 15.0,
                "taskscomple": 8.5211
            }
        ],
        "comparisonTasks": [
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 166.67,
                "tasks0": 0.003,
                "taskscomple": 0.005
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 88.75,
                "tasks0": 0.008,
                "taskscomple": 0.0071
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 41.9,
                "tasks0": 0.021,
                "taskscomple": 0.0088
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "分析测试中心",
        "shortName": "分测中心",
        "tasks": [
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 44.86,
                "tasks0": 15.0,
                "taskscomple": 6.729
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 40.47,
                "tasks0": 0.06,
                "taskscomple": 0.02428
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 20.0,
                "tasks0": 5.0,
                "taskscomple": 1.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 2.0,
                "tasks0": 20.0,
                "taskscomple": 0.4
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 0.0,
                "tasks0": 3.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "高水平论文（篇）",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 85.3,
                "tasks0": 0.02,
                "taskscomple": 0.01706
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 40.47,
                "tasks0": 0.06,
                "taskscomple": 0.02428
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 16.67,
                "tasks0": 6.0,
                "taskscomple": 1.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 1.33,
                "tasks0": 30.0,
                "taskscomple": 0.4
            },
            {
                "name": "成果转化合同金额（万元）",
                "completion2025": 1.33,
                "tasks0": 30.0,
                "taskscomple": 0.4
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 0.0,
                "tasks0": 0.01,
                "taskscomple": 0.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 0.0,
                "tasks0": 6.0,
                "taskscomple": 0.0
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "核环境安全技术创新中心",
        "shortName": "核创中心",
        "tasks": [
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 249.67,
                "tasks0": 0.24,
                "taskscomple": 0.5992
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 120.0,
                "tasks0": 5.0,
                "taskscomple": 6.0
            },
            {
                "name": "省部级高层次人才（人次，不含学带后备)",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 100.0,
                "tasks0": 10.0,
                "taskscomple": 10.0
            },
            {
                "name": "国家自科基金项目（项)",
                "completion2025": 50.0,
                "tasks0": 2.0,
                "taskscomple": 1.0
            },
            {
                "name": "海外优青获批/申报",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进优秀人才",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "引进学术骨干",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 0.0,
                "tasks0": 15.0,
                "taskscomple": 0.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "高水平论文（篇）",
                "completion2025": 185.71,
                "tasks0": 7.0,
                "taskscomple": 13.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 138.7,
                "tasks0": 0.432,
                "taskscomple": 0.5992
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 137.0,
                "tasks0": 0.09,
                "taskscomple": 0.1233
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 133.77,
                "tasks0": 0.162,
                "taskscomple": 0.2167
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 100.0,
                "tasks0": 2.0,
                "taskscomple": 2.0
            },
            {
                "name": "省部级政府奖（一等奖：全部）",
                "completion2025": 100.0,
                "tasks0": 1.0,
                "taskscomple": 1.0
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 100.0,
                "tasks0": 2.0,
                "taskscomple": 2.0
            },
            {
                "name": "国家级人才 A类(含柔性)/B类/C类",
                "completion2025": 100.0,
                "tasks0": 2.0,
                "taskscomple": 2.0
            },
            {
                "name": "授权发明专利数（项)",
                "completion2025": 60.0,
                "tasks0": 10.0,
                "taskscomple": 6.0
            },
            {
                "name": "国家自然、技术及科技三大奖（项)",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 5.0,
                "tasks0": 200.0,
                "taskscomple": 10.0
            },
            {
                "name": "成果转化合同金额（万元）",
                "completion2025": 3.33,
                "tasks0": 300.0,
                "taskscomple": 10.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 0.0,
                "tasks0": 30.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "拉美研究中心",
        "shortName": "拉美中心",
        "tasks": [
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 2013.33,
                "tasks0": 15.0,
                "taskscomple": 302.0
            },
            {
                "name": "高水平学术专著（本)",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "高水平智库成果（项)",
                "completion2025": 100.0,
                "tasks0": 2.0,
                "taskscomple": 2.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 22.86,
                "tasks0": 0.007,
                "taskscomple": 0.0016
            }
        ],
        "comparisonTasks": [
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 44.54,
                "tasks0": 0.007,
                "taskscomple": 0.003118
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 33.33,
                "tasks0": 3.0,
                "taskscomple": 1.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 19.05,
                "tasks0": 0.0084,
                "taskscomple": 0.0016
            },
            {
                "name": "国家社科基金项目（项）",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "省级哲学社会科学优秀成果获奖（项)[一等奖；全部]",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            }
        ]
    },
];

// 4. 新型研发机构
const institutionColleges = [
    {
        "name": "四川省军民融合研究院",
        "shortName": "四川省军民融合研究院",
        "tasks": [
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 191.56,
                "tasks0": 0.018,
                "taskscomple": 0.03448
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 100.0,
                "tasks0": 70.0,
                "taskscomple": 70.0
            }
        ],
        "comparisonTasks": [
            {
                "name": "智库成果",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "成果转化合同金额（万元）",
                "completion2025": 200.0,
                "tasks0": 150.0,
                "taskscomple": 300.0
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 92.15,
                "tasks0": 0.036,
                "taskscomple": 0.033173
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 70.0,
                "tasks0": 100.0,
                "taskscomple": 70.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 63.85,
                "tasks0": 0.054,
                "taskscomple": 0.03448
            },
            {
                "name": "高水平论文（篇）",
                "completion2025": 33.33,
                "tasks0": 3.0,
                "taskscomple": 1.0
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 21.53,
                "tasks0": 0.018,
                "taskscomple": 0.0038755
            },
            {
                "name": "授权发明专利",
                "completion2025": 14.29,
                "tasks0": 7.0,
                "taskscomple": 1.0
            },
            {
                "name": "国家自科基金项目（项）",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "社会力量奖（项）",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 0.0,
                "tasks0": 50.0,
                "taskscomple": 0.0
            }
        ]
    },

    {
        "name": "成都创新研究院",
        "shortName": "成都创新研究院",
        "tasks": [
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 1400.0,
                "tasks0": 10.0,
                "taskscomple": 140.0
            },
            {
                "name": "非学历继教办学经费（万元)",
                "completion2025": 101.08,
                "tasks0": 15.0,
                "taskscomple": 15.16224
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 92.57,
                "tasks0": 0.24,
                "taskscomple": 0.222167
            },
            {
                "name": "协助引进优秀人才",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            },
            {
                "name": "协助引进学术骨干",
                "completion2025": 50.0,
                "tasks0": 1.0,
                "taskscomple": 0.5
            }
        ],
        "comparisonTasks": [
            {
                "name": "社会力量奖（项）",
                "completion2025": 200.0,
                "tasks0": 1.0,
                "taskscomple": 2.0
            },
            {
                "name": "成果转化到校资金（万元)",
                "completion2025": 70.0,
                "tasks0": 200.0,
                "taskscomple": 140.0
            },
            {
                "name": "科研立项经费（亿元)",
                "completion2025": 39.81,
                "tasks0": 0.558,
                "taskscomple": 0.222167
            },
            {
                "name": "成果转化合同金额（万元）",
                "completion2025": 0.22,
                "tasks0": 500.0,
                "taskscomple": 1.1
            },
            {
                "name": "科研到账经费（亿元)",
                "completion2025": 0.0,
                "tasks0": 0.378,
                "taskscomple": 0.0
            },
            {
                "name": "军工到账经费（亿元)",
                "completion2025": 0.0,
                "tasks0": 0.054,
                "taskscomple": 0.0
            },
            {
                "name": "成果转化经费超过500万项目（项）",
                "completion2025": 0.0,
                "tasks0": 1.0,
                "taskscomple": 0.0
            },
            {
                "name": "基金会募集资金（万元）",
                "completion2025": 0.0,
                "tasks0": 40.0,
                "taskscomple": 0.0
            }
        ]
    }

];

// 科研业绩统计数据
const researchPerformanceData = [
    {
        name: "材化学院",
        researchFunding: 11910.83,
        researchFundingPerCapita: 57.82,
        receivedFunding: 5876.64,
        receivedFundingPerCapita: 28.53
    },
    {
        name: "环资学院",
        researchFunding: 7913.1,
        researchFundingPerCapita: 40.79,
        receivedFunding: 4405.33,
        receivedFundingPerCapita: 22.71
    },
    {
        name: "信控学院",
        researchFunding: 5864.7,
        researchFundingPerCapita: 34.10,
        receivedFunding: 5175,
        receivedFundingPerCapita: 30.09
    },
    {
        name: "生命学院",
        researchFunding: 4298.11,
        researchFundingPerCapita: 25.74,
        receivedFunding: 3279.24,
        receivedFundingPerCapita: 19.64
    },
    {
        name: "制造学院",
        researchFunding: 3815.92,
        researchFundingPerCapita: 33.18,
        receivedFunding: 1850.01,
        receivedFundingPerCapita: 16.09
    },
    {
        name: "国防学院",
        researchFunding: 3284.44,
        researchFundingPerCapita: 41.06,
        receivedFunding: 2507.98,
        receivedFundingPerCapita: 31.35
    },
    {
        name: "土建学院",
        researchFunding: 4122.99,
        researchFundingPerCapita: 24.69,
        receivedFunding: 3412.9,
        receivedFundingPerCapita: 20.44
    },
    {
        name: "计算机学院",
        researchFunding: 2176.93,
        researchFundingPerCapita: 15.77,
        receivedFunding: 1683.12,
        receivedFundingPerCapita: 12.20
    },
    {
        name: "数理学院",
        researchFunding: 1322.72,
        researchFundingPerCapita: 10.10,
        receivedFunding: 904.837,
        receivedFundingPerCapita: 6.91
    },
    {
        name: "航空航天学院",
        researchFunding: 587.43,
        researchFundingPerCapita: 20.26,
        receivedFunding: 192.93,
        receivedFundingPerCapita: 6.65
    },
    {
        name: "医学院",
        researchFunding: 203.55,
        researchFundingPerCapita: 6.57,
        receivedFunding: 193.103,
        receivedFundingPerCapita: 6.23
    },
    {
        name: "马克思主义学院",
        researchFunding: 210.52,
        researchFundingPerCapita: 2.66,
        receivedFunding: 126.592,
        receivedFundingPerCapita: 1.60
    },
    {
        name: "经管学院",
        researchFunding: 824.971,
        researchFundingPerCapita: 5.19,
        receivedFunding: 475.1851,
        receivedFundingPerCapita: 2.99
    },
    {
        name: "外语学院",
        researchFunding: 30.3,
        researchFundingPerCapita: 0.23,
        receivedFunding: 29.05,
        receivedFundingPerCapita: 0.22
    },
    {
        name: "文艺学院",
        researchFunding: 128.559,
        researchFundingPerCapita: 1.15,
        receivedFunding: 89.114,
        receivedFundingPerCapita: 0.80
    },
    {
        name: "法学院",
        researchFunding: 100.6,
        researchFundingPerCapita: 1.62,
        receivedFunding: 126.6,
        receivedFundingPerCapita: 2.04
    },
    {
        name: "体健学院",
        researchFunding: 0.95,
        researchFundingPerCapita: 0.01,
        receivedFunding: 8.55,
        receivedFundingPerCapita: 0.13
    },
    {
        name: "核创中心",
        researchFunding: 6599.021,
        researchFundingPerCapita: 212.87,
        receivedFunding: 2353.1597,
        receivedFundingPerCapita: 75.91
    },
    {
        name: "拉美中心",
        researchFunding: 12.98,
        researchFundingPerCapita: 1.62,
        receivedFunding: 25.68,
        receivedFundingPerCapita: 3.21
    }
];