/**
 * WMS Demo Prototype - Mock Data
 * 化工企业仓储管理系统演示数据
 * Generated: 2026-04-14
 */

const MockData = {};

// ============================================================
// 1. 物料主数据 (Materials) - 15 items
// ============================================================
MockData.materials = [
  {
    code: 'MAT-001',
    name: '甲苯',
    spec: '工业级 99.5%',
    unit: 'kg',
    cas: '108-88-3',
    un: 'UN1294',
    hazardLevel: 2,
    storageTemp: '0~30℃',
    shelfLife: 730,
    packaging: '200L铁桶',
    category: '有机溶剂'
  },
  {
    code: 'MAT-002',
    name: '丙酮',
    spec: '分析纯 ≥99.5%',
    unit: 'kg',
    cas: '67-64-1',
    un: 'UN1090',
    hazardLevel: 2,
    storageTemp: '0~25℃',
    shelfLife: 365,
    packaging: '160kg铁桶',
    category: '有机溶剂'
  },
  {
    code: 'MAT-003',
    name: '乙酸乙酯',
    spec: '工业级 99%',
    unit: 'kg',
    cas: '141-78-6',
    un: 'UN1173',
    hazardLevel: 2,
    storageTemp: '0~30℃',
    shelfLife: 365,
    packaging: '180kg铁桶',
    category: '有机溶剂'
  },
  {
    code: 'MAT-004',
    name: '二甲苯',
    spec: '工业级 异构体混合物',
    unit: 'kg',
    cas: '1330-20-7',
    un: 'UN1307',
    hazardLevel: 2,
    storageTemp: '0~30℃',
    shelfLife: 730,
    packaging: '200L铁桶',
    category: '有机溶剂'
  },
  {
    code: 'MAT-005',
    name: '环己酮',
    spec: '工业级 ≥99%',
    unit: 'kg',
    cas: '108-94-1',
    un: 'UN1915',
    hazardLevel: 2,
    storageTemp: '5~35℃',
    shelfLife: 365,
    packaging: '170kg铁桶',
    category: '有机溶剂'
  },
  {
    code: 'MAT-006',
    name: '丁醇',
    spec: '正丁醇 工业级 ≥99.5%',
    unit: 'kg',
    cas: '71-36-3',
    un: 'UN1120',
    hazardLevel: 2,
    storageTemp: '0~30℃',
    shelfLife: 365,
    packaging: '160kg铁桶',
    category: '有机溶剂'
  },
  {
    code: 'MAT-007',
    name: '醋酸丁酯',
    spec: '工业级 ≥99%',
    unit: 'kg',
    cas: '123-86-4',
    un: 'UN1123',
    hazardLevel: 2,
    storageTemp: '0~30℃',
    shelfLife: 365,
    packaging: '175kg铁桶',
    category: '有机溶剂'
  },
  {
    code: 'MAT-008',
    name: '丙烯酸树脂',
    spec: '热塑性 固含量50%',
    unit: 'kg',
    cas: '9003-01-4',
    un: '',
    hazardLevel: 4,
    storageTemp: '5~35℃',
    shelfLife: 180,
    packaging: '200kg铁桶',
    category: '树脂'
  },
  {
    code: 'MAT-009',
    name: '环氧树脂',
    spec: 'E-44 环氧当量210-240',
    unit: 'kg',
    cas: '25068-38-6',
    un: '',
    hazardLevel: 4,
    storageTemp: '5~30℃',
    shelfLife: 365,
    packaging: '220kg铁桶',
    category: '树脂'
  },
  {
    code: 'MAT-010',
    name: '聚氨酯固化剂',
    spec: 'HDI三聚体 固含量75%',
    unit: 'kg',
    cas: '28182-81-2',
    un: 'UN2206',
    hazardLevel: 4,
    storageTemp: '5~25℃',
    shelfLife: 270,
    packaging: '25kg铁桶',
    category: '固化剂'
  },
  {
    code: 'MAT-011',
    name: '消泡剂',
    spec: '有机硅型 BYK-066N',
    unit: 'kg',
    cas: '',
    un: '',
    hazardLevel: 4,
    storageTemp: '5~35℃',
    shelfLife: 365,
    packaging: '20kg塑料桶',
    category: '助剂'
  },
  {
    code: 'MAT-012',
    name: '流平剂',
    spec: '丙烯酸酯型 BYK-361N',
    unit: 'kg',
    cas: '',
    un: '',
    hazardLevel: 4,
    storageTemp: '5~35℃',
    shelfLife: 365,
    packaging: '20kg塑料桶',
    category: '助剂'
  },
  {
    code: 'MAT-013',
    name: '分散剂',
    spec: '高分子量型 BYK-163',
    unit: 'kg',
    cas: '',
    un: '',
    hazardLevel: 4,
    storageTemp: '5~35℃',
    shelfLife: 365,
    packaging: '20kg塑料桶',
    category: '助剂'
  },
  {
    code: 'MAT-014',
    name: '氢氧化钠',
    spec: '片碱 ≥99%',
    unit: '包',
    cas: '1310-73-2',
    un: 'UN1823',
    hazardLevel: 3,
    storageTemp: '0~40℃',
    shelfLife: 730,
    packaging: '25kg编织袋',
    category: '无机碱'
  },
  {
    code: 'MAT-015',
    name: '过氧化氢',
    spec: '工业级 27.5%',
    unit: '桶',
    cas: '7722-84-1',
    un: 'UN2014',
    hazardLevel: 3,
    storageTemp: '0~25℃',
    shelfLife: 180,
    packaging: '25kg塑料桶',
    category: '氧化剂'
  }
];

// ============================================================
// 2. 仓库库位 (Warehouses & Locations)
// ============================================================
MockData.warehouses = [
  {
    code: 'WH-01',
    name: '原料仓',
    zones: [
      {
        code: 'A',
        name: 'A区-防爆区',
        locations: [
          { code: 'A-01-01', type: '防爆', status: '占用', maxWeight: 2000, maxVolume: 10, currentMaterial: '甲苯' },
          { code: 'A-01-02', type: '防爆', status: '占用', maxWeight: 2000, maxVolume: 10, currentMaterial: '丙酮' },
          { code: 'A-01-03', type: '防爆', status: '空闲', maxWeight: 2000, maxVolume: 10, currentMaterial: '' },
          { code: 'A-01-04', type: '防爆', status: '占用', maxWeight: 2000, maxVolume: 10, currentMaterial: '乙酸乙酯' },
          { code: 'A-02-01', type: '防爆', status: '占用', maxWeight: 2000, maxVolume: 10, currentMaterial: '二甲苯' },
          { code: 'A-02-02', type: '防爆', status: '空闲', maxWeight: 2000, maxVolume: 10, currentMaterial: '' }
        ]
      },
      {
        code: 'B',
        name: 'B区-普通区',
        locations: [
          { code: 'B-01-01', type: '普通', status: '占用', maxWeight: 3000, maxVolume: 15, currentMaterial: '丙烯酸树脂' },
          { code: 'B-01-02', type: '普通', status: '占用', maxWeight: 3000, maxVolume: 15, currentMaterial: '环氧树脂' },
          { code: 'B-01-03', type: '普通', status: '空闲', maxWeight: 3000, maxVolume: 15, currentMaterial: '' },
          { code: 'B-01-04', type: '普通', status: '占用', maxWeight: 3000, maxVolume: 15, currentMaterial: '消泡剂' },
          { code: 'B-02-01', type: '普通', status: '占用', maxWeight: 3000, maxVolume: 15, currentMaterial: '流平剂' }
        ]
      },
      {
        code: 'C',
        name: 'C区-冷藏区',
        locations: [
          { code: 'C-01-01', type: '冷藏', status: '占用', maxWeight: 1000, maxVolume: 5, currentMaterial: '聚氨酯固化剂' },
          { code: 'C-01-02', type: '冷藏', status: '空闲', maxWeight: 1000, maxVolume: 5, currentMaterial: '' },
          { code: 'C-01-03', type: '冷藏', status: '占用', maxWeight: 1000, maxVolume: 5, currentMaterial: '过氧化氢' },
          { code: 'C-01-04', type: '冷藏', status: '空闲', maxWeight: 1000, maxVolume: 5, currentMaterial: '' }
        ]
      }
    ]
  },
  {
    code: 'WH-02',
    name: '成品仓',
    zones: [
      {
        code: 'D',
        name: 'D区-恒温区',
        locations: [
          { code: 'D-01-01', type: '恒温', status: '占用', maxWeight: 2500, maxVolume: 12, currentMaterial: '醇酸调和漆' },
          { code: 'D-01-02', type: '恒温', status: '占用', maxWeight: 2500, maxVolume: 12, currentMaterial: '环氧底漆' },
          { code: 'D-01-03', type: '恒温', status: '空闲', maxWeight: 2500, maxVolume: 12, currentMaterial: '' },
          { code: 'D-01-04', type: '恒温', status: '占用', maxWeight: 2500, maxVolume: 12, currentMaterial: '聚氨酯面漆' },
          { code: 'D-02-01', type: '恒温', status: '占用', maxWeight: 2500, maxVolume: 12, currentMaterial: '丙烯酸乳胶漆' }
        ]
      },
      {
        code: 'E',
        name: 'E区-普通区',
        locations: [
          { code: 'E-01-01', type: '普通', status: '占用', maxWeight: 3000, maxVolume: 15, currentMaterial: '稀释剂' },
          { code: 'E-01-02', type: '普通', status: '空闲', maxWeight: 3000, maxVolume: 15, currentMaterial: '' },
          { code: 'E-01-03', type: '普通', status: '占用', maxWeight: 3000, maxVolume: 15, currentMaterial: '固化剂成品' },
          { code: 'E-01-04', type: '普通', status: '空闲', maxWeight: 3000, maxVolume: 15, currentMaterial: '' },
          { code: 'E-02-01', type: '普通', status: '占用', maxWeight: 3000, maxVolume: 15, currentMaterial: '防腐涂料' }
        ]
      }
    ]
  },
  {
    code: 'WH-03',
    name: '危化品专用仓',
    zones: [
      {
        code: 'F',
        name: 'F区-剧毒品区',
        locations: [
          { code: 'F-01-01', type: '防爆', status: '占用', maxWeight: 500, maxVolume: 3, currentMaterial: '甲醇' },
          { code: 'F-01-02', type: '防爆', status: '空闲', maxWeight: 500, maxVolume: 3, currentMaterial: '' },
          { code: 'F-01-03', type: '防爆', status: '占用', maxWeight: 500, maxVolume: 3, currentMaterial: '异氰酸酯' },
          { code: 'F-01-04', type: '防爆', status: '空闲', maxWeight: 500, maxVolume: 3, currentMaterial: '' }
        ]
      },
      {
        code: 'G',
        name: 'G区-易燃品区',
        locations: [
          { code: 'G-01-01', type: '防爆', status: '占用', maxWeight: 1000, maxVolume: 5, currentMaterial: '甲苯' },
          { code: 'G-01-02', type: '防爆', status: '占用', maxWeight: 1000, maxVolume: 5, currentMaterial: '丙酮' },
          { code: 'G-01-03', type: '防爆', status: '空闲', maxWeight: 1000, maxVolume: 5, currentMaterial: '' },
          { code: 'G-01-04', type: '防爆', status: '占用', maxWeight: 1000, maxVolume: 5, currentMaterial: '环己酮' },
          { code: 'G-02-01', type: '防爆', status: '占用', maxWeight: 1000, maxVolume: 5, currentMaterial: '丁醇' }
        ]
      },
      {
        code: 'H',
        name: 'H区-腐蚀品区',
        locations: [
          { code: 'H-01-01', type: '普通', status: '占用', maxWeight: 2000, maxVolume: 8, currentMaterial: '氢氧化钠' },
          { code: 'H-01-02', type: '普通', status: '占用', maxWeight: 2000, maxVolume: 8, currentMaterial: '过氧化氢' },
          { code: 'H-01-03', type: '普通', status: '空闲', maxWeight: 2000, maxVolume: 8, currentMaterial: '' },
          { code: 'H-01-04', type: '普通', status: '空闲', maxWeight: 2000, maxVolume: 8, currentMaterial: '' }
        ]
      }
    ]
  }
];

// ============================================================
// 3. 供应商 (Suppliers) - 8 items
// ============================================================
MockData.suppliers = [
  { code: 'SUP-001', name: '上海华谊精细化工有限公司', contact: '周海涛', phone: '021-5836-7890', address: '上海市奉贤区海湾化工园区兴业路88号', status: '正常' },
  { code: 'SUP-002', name: '江苏扬子巴斯夫有限公司', contact: '陈建军', phone: '025-8765-4321', address: '江苏省南京市江北新区化工园区扬子路1号', status: '正常' },
  { code: 'SUP-003', name: '浙江龙盛集团股份有限公司', contact: '林晓峰', phone: '0571-8234-5678', address: '浙江省杭州市上虞区龙盛路100号', status: '正常' },
  { code: 'SUP-004', name: '山东海科化工集团有限公司', contact: '张铭远', phone: '0533-7891-2345', address: '山东省淄博市临淄区海科路66号', status: '正常' },
  { code: 'SUP-005', name: '广东天禾化工有限公司', contact: '黄志强', phone: '020-3456-7891', address: '广东省广州市南沙区南沙化工园区天禾大道22号', status: '正常' },
  { code: 'SUP-006', name: '德国拜耳材料科技(中国)有限公司', contact: '王丽华', phone: '021-6192-0000', address: '上海市浦东新区张江高科技园区碧波路690号', status: '正常' },
  { code: 'SUP-007', name: '毕克化学(上海)有限公司', contact: '李婷', phone: '021-3350-9988', address: '上海市闵行区申虹路1688号', status: '暂停' },
  { code: 'SUP-008', name: '济南万化化学有限公司', contact: '赵鹏', phone: '0531-6789-1234', address: '山东省济南市天桥区化工产业园万化路18号', status: '正常' }
];

// ============================================================
// 4. 客户 (Customers) - 8 items
// ============================================================
MockData.customers = [
  { code: 'CUS-001', name: '阿克苏诺贝尔涂料(上海)有限公司', contact: '郑伟明', phone: '021-5169-8888', address: '上海市闵行区虹桥商务区吴中路1188号', industry: '涂料厂' },
  { code: 'CUS-002', name: '烟台万华聚氨酯有限公司', contact: '孙磊', phone: '0535-6352-8800', address: '山东省烟台市经济技术开发区万华路18号', industry: '胶黏剂厂' },
  { code: 'CUS-003', name: '浙江传化合成材料有限公司', contact: '刘国栋', phone: '0571-8298-7654', address: '浙江省杭州市萧山区传化大道188号', industry: '塑料加工厂' },
  { code: 'CUS-004', name: '立邦涂料(中国)有限公司', contact: '吴冬梅', phone: '021-6789-3210', address: '上海市浦东新区龙东大道3000号', industry: '涂料厂' },
  { code: 'CUS-005', name: '广东嘉宝莉化工集团有限公司', contact: '何俊杰', phone: '0750-3966-888', address: '广东省江门市蓬江区荷塘镇嘉宝莉大道1号', industry: '涂料厂' },
  { code: 'CUS-006', name: '苏州回天新材料有限公司', contact: '马宏伟', phone: '0512-6891-2345', address: '江苏省苏州市工业园区星龙街188号', industry: '胶黏剂厂' },
  { code: 'CUS-007', name: '佛山市顺德区天安新材料有限公司', contact: '钟文斌', phone: '0757-2896-7890', address: '广东省佛山市顺德区陈村镇天安科技园', industry: '塑料加工厂' },
  { code: 'CUS-008', name: '河北晨阳工贸集团有限公司', contact: '杨淑芬', phone: '0312-3456-789', address: '河北省保定市徐水区晨阳大道1号', industry: '涂料厂' }
];

// ============================================================
// 5. 入库单 (Inbound Orders) - 10 items
// ============================================================
MockData.inboundOrders = [
  {
    orderNo: 'RK2026041400001',
    type: '采购入库',
    supplier: '上海华谊精细化工有限公司',
    expectedDate: '2026-04-14',
    status: '待收货',
    items: [
      { materialCode: 'MAT-001', materialName: '甲苯', expectedQty: 2000, actualQty: 0, batchNo: 'BT20260414001' },
      { materialCode: 'MAT-004', materialName: '二甲苯', expectedQty: 1500, actualQty: 0, batchNo: 'BT20260414002' }
    ]
  },
  {
    orderNo: 'RK2026041400002',
    type: '采购入库',
    supplier: '江苏扬子巴斯夫有限公司',
    expectedDate: '2026-04-14',
    status: '质检中',
    items: [
      { materialCode: 'MAT-002', materialName: '丙酮', expectedQty: 1000, actualQty: 1000, batchNo: 'BT20260413005' },
      { materialCode: 'MAT-003', materialName: '乙酸乙酯', expectedQty: 800, actualQty: 800, batchNo: 'BT20260413006' }
    ]
  },
  {
    orderNo: 'RK2026041300003',
    type: '采购入库',
    supplier: '浙江龙盛集团股份有限公司',
    expectedDate: '2026-04-13',
    status: '待上架',
    items: [
      { materialCode: 'MAT-008', materialName: '丙烯酸树脂', expectedQty: 500, actualQty: 500, batchNo: 'BT20260413007' }
    ]
  },
  {
    orderNo: 'RK2026041300004',
    type: '采购入库',
    supplier: '德国拜耳材料科技(中国)有限公司',
    expectedDate: '2026-04-13',
    status: '已完成',
    items: [
      { materialCode: 'MAT-010', materialName: '聚氨酯固化剂', expectedQty: 300, actualQty: 300, batchNo: 'BT20260413008' },
      { materialCode: 'MAT-009', materialName: '环氧树脂', expectedQty: 600, actualQty: 600, batchNo: 'BT20260413009' }
    ]
  },
  {
    orderNo: 'RK2026041200005',
    type: '生产入库',
    supplier: '本厂生产车间',
    expectedDate: '2026-04-12',
    status: '已完成',
    items: [
      { materialCode: 'FP-001', materialName: '醇酸调和漆-白色', expectedQty: 200, actualQty: 198, batchNo: 'SC20260412001' }
    ]
  },
  {
    orderNo: 'RK2026041200006',
    type: '采购入库',
    supplier: '毕克化学(上海)有限公司',
    expectedDate: '2026-04-12',
    status: '已完成',
    items: [
      { materialCode: 'MAT-011', materialName: '消泡剂', expectedQty: 100, actualQty: 100, batchNo: 'BT20260412010' },
      { materialCode: 'MAT-012', materialName: '流平剂', expectedQty: 80, actualQty: 80, batchNo: 'BT20260412011' },
      { materialCode: 'MAT-013', materialName: '分散剂', expectedQty: 120, actualQty: 120, batchNo: 'BT20260412012' }
    ]
  },
  {
    orderNo: 'RK2026041100007',
    type: '采购入库',
    supplier: '山东海科化工集团有限公司',
    expectedDate: '2026-04-11',
    status: '已完成',
    items: [
      { materialCode: 'MAT-005', materialName: '环己酮', expectedQty: 800, actualQty: 795, batchNo: 'BT20260411013' }
    ]
  },
  {
    orderNo: 'RK2026041400008',
    type: '退货入库',
    supplier: '',
    expectedDate: '2026-04-14',
    status: '待收货',
    items: [
      { materialCode: 'FP-002', materialName: '环氧底漆-灰色', expectedQty: 50, actualQty: 0, batchNo: 'SC20260325001' }
    ]
  },
  {
    orderNo: 'RK2026041400009',
    type: '采购入库',
    supplier: '济南万化化学有限公司',
    expectedDate: '2026-04-15',
    status: '待收货',
    items: [
      { materialCode: 'MAT-014', materialName: '氢氧化钠', expectedQty: 2000, actualQty: 0, batchNo: 'BT20260415014' },
      { materialCode: 'MAT-015', materialName: '过氧化氢', expectedQty: 500, actualQty: 0, batchNo: 'BT20260415015' }
    ]
  },
  {
    orderNo: 'RK2026041000010',
    type: '生产入库',
    supplier: '本厂生产车间',
    expectedDate: '2026-04-10',
    status: '已完成',
    items: [
      { materialCode: 'FP-003', materialName: '聚氨酯面漆-蓝色', expectedQty: 150, actualQty: 150, batchNo: 'SC20260410002' },
      { materialCode: 'FP-004', materialName: '丙烯酸乳胶漆-白色', expectedQty: 300, actualQty: 296, batchNo: 'SC20260410003' }
    ]
  }
];

// ============================================================
// 6. 出库单 (Outbound Orders) - 10 items
// ============================================================
MockData.outboundOrders = [
  {
    orderNo: 'CK2026041400001',
    type: '销售出库',
    customer: '阿克苏诺贝尔涂料(上海)有限公司',
    requiredDate: '2026-04-14',
    status: '待拣货',
    items: [
      { materialCode: 'MAT-001', materialName: '甲苯', qty: 600, batchNo: 'BT20260320001', location: 'A-01-01' },
      { materialCode: 'MAT-002', materialName: '丙酮', qty: 320, batchNo: 'BT20260318003', location: 'A-01-02' }
    ]
  },
  {
    orderNo: 'CK2026041400002',
    type: '生产领料',
    customer: '本厂生产车间-涂料线',
    requiredDate: '2026-04-14',
    status: '拣货中',
    items: [
      { materialCode: 'MAT-008', materialName: '丙烯酸树脂', qty: 200, batchNo: 'BT20260305004', location: 'B-01-01' },
      { materialCode: 'MAT-011', materialName: '消泡剂', qty: 10, batchNo: 'BT20260412010', location: 'B-01-04' },
      { materialCode: 'MAT-013', materialName: '分散剂', qty: 15, batchNo: 'BT20260412012', location: 'B-02-01' }
    ]
  },
  {
    orderNo: 'CK2026041400003',
    type: '销售出库',
    customer: '立邦涂料(中国)有限公司',
    requiredDate: '2026-04-14',
    status: '待复核',
    items: [
      { materialCode: 'MAT-003', materialName: '乙酸乙酯', qty: 540, batchNo: 'BT20260310005', location: 'A-01-04' },
      { materialCode: 'MAT-007', materialName: '醋酸丁酯', qty: 350, batchNo: 'BT20260312007', location: 'G-01-01' }
    ]
  },
  {
    orderNo: 'CK2026041400004',
    type: '销售出库',
    customer: '广东嘉宝莉化工集团有限公司',
    requiredDate: '2026-04-15',
    status: '待拣货',
    items: [
      { materialCode: 'MAT-009', materialName: '环氧树脂', qty: 220, batchNo: 'BT20260413009', location: 'B-01-02' },
      { materialCode: 'MAT-010', materialName: '聚氨酯固化剂', qty: 100, batchNo: 'BT20260413008', location: 'C-01-01' }
    ]
  },
  {
    orderNo: 'CK2026041300005',
    type: '生产领料',
    customer: '本厂生产车间-防腐线',
    requiredDate: '2026-04-13',
    status: '已发货',
    items: [
      { materialCode: 'MAT-004', materialName: '二甲苯', qty: 400, batchNo: 'BT20260301002', location: 'A-02-01' },
      { materialCode: 'MAT-009', materialName: '环氧树脂', qty: 300, batchNo: 'BT20260225008', location: 'B-01-02' }
    ]
  },
  {
    orderNo: 'CK2026041300006',
    type: '销售出库',
    customer: '苏州回天新材料有限公司',
    requiredDate: '2026-04-13',
    status: '已发货',
    items: [
      { materialCode: 'MAT-005', materialName: '环己酮', qty: 160, batchNo: 'BT20260411013', location: 'G-01-04' }
    ]
  },
  {
    orderNo: 'CK2026041400007',
    type: '调拨出库',
    customer: '分仓-华东配送中心',
    requiredDate: '2026-04-14',
    status: '待拣货',
    items: [
      { materialCode: 'FP-001', materialName: '醇酸调和漆-白色', qty: 80, batchNo: 'SC20260412001', location: 'D-01-01' },
      { materialCode: 'FP-003', materialName: '聚氨酯面漆-蓝色', qty: 60, batchNo: 'SC20260410002', location: 'D-01-04' }
    ]
  },
  {
    orderNo: 'CK2026041200008',
    type: '销售出库',
    customer: '烟台万华聚氨酯有限公司',
    requiredDate: '2026-04-12',
    status: '已发货',
    items: [
      { materialCode: 'MAT-006', materialName: '丁醇', qty: 480, batchNo: 'BT20260308006', location: 'G-02-01' },
      { materialCode: 'MAT-001', materialName: '甲苯', qty: 800, batchNo: 'BT20260320001', location: 'A-01-01' }
    ]
  },
  {
    orderNo: 'CK2026041400009',
    type: '生产领料',
    customer: '本厂生产车间-乳胶漆线',
    requiredDate: '2026-04-14',
    status: '拣货中',
    items: [
      { materialCode: 'MAT-012', materialName: '流平剂', qty: 8, batchNo: 'BT20260412011', location: 'B-01-04' },
      { materialCode: 'MAT-008', materialName: '丙烯酸树脂', qty: 150, batchNo: 'BT20260413007', location: 'B-01-01' }
    ]
  },
  {
    orderNo: 'CK2026041100010',
    type: '销售出库',
    customer: '佛山市顺德区天安新材料有限公司',
    requiredDate: '2026-04-11',
    status: '已发货',
    items: [
      { materialCode: 'MAT-014', materialName: '氢氧化钠', qty: 500, batchNo: 'BT20260228014', location: 'H-01-01' }
    ]
  }
];

// ============================================================
// 7. 库存 (Inventory) - 20 items
// ============================================================
MockData.inventory = [
  {
    materialCode: 'MAT-001', materialName: '甲苯', batchNo: 'BT20260320001',
    location: 'A-01-01', qty: 1200, unit: 'kg',
    status: '正常', inboundDate: '2026-03-20', expiryDate: '2028-03-20',
    supplierName: '上海华谊精细化工有限公司', hazardLevel: 2
  },
  {
    materialCode: 'MAT-002', materialName: '丙酮', batchNo: 'BT20260318003',
    location: 'A-01-02', qty: 640, unit: 'kg',
    status: '正常', inboundDate: '2026-03-18', expiryDate: '2027-03-18',
    supplierName: '江苏扬子巴斯夫有限公司', hazardLevel: 2
  },
  {
    materialCode: 'MAT-003', materialName: '乙酸乙酯', batchNo: 'BT20260310005',
    location: 'A-01-04', qty: 720, unit: 'kg',
    status: '正常', inboundDate: '2026-03-10', expiryDate: '2027-03-10',
    supplierName: '江苏扬子巴斯夫有限公司', hazardLevel: 2
  },
  {
    materialCode: 'MAT-004', materialName: '二甲苯', batchNo: 'BT20260301002',
    location: 'A-02-01', qty: 900, unit: 'kg',
    status: '正常', inboundDate: '2026-03-01', expiryDate: '2028-03-01',
    supplierName: '上海华谊精细化工有限公司', hazardLevel: 2
  },
  {
    materialCode: 'MAT-005', materialName: '环己酮', batchNo: 'BT20260411013',
    location: 'G-01-04', qty: 635, unit: 'kg',
    status: '正常', inboundDate: '2026-04-11', expiryDate: '2027-04-11',
    supplierName: '山东海科化工集团有限公司', hazardLevel: 2
  },
  {
    materialCode: 'MAT-006', materialName: '丁醇', batchNo: 'BT20260308006',
    location: 'G-02-01', qty: 320, unit: 'kg',
    status: '正常', inboundDate: '2026-03-08', expiryDate: '2027-03-08',
    supplierName: '山东海科化工集团有限公司', hazardLevel: 2
  },
  {
    materialCode: 'MAT-007', materialName: '醋酸丁酯', batchNo: 'BT20260312007',
    location: 'G-01-01', qty: 525, unit: 'kg',
    status: '正常', inboundDate: '2026-03-12', expiryDate: '2027-03-12',
    supplierName: '广东天禾化工有限公司', hazardLevel: 2
  },
  {
    materialCode: 'MAT-008', materialName: '丙烯酸树脂', batchNo: 'BT20260305004',
    location: 'B-01-01', qty: 380, unit: 'kg',
    status: '正常', inboundDate: '2026-03-05', expiryDate: '2026-09-01',
    supplierName: '浙江龙盛集团股份有限公司', hazardLevel: 4
  },
  {
    materialCode: 'MAT-008', materialName: '丙烯酸树脂', batchNo: 'BT20260110002',
    location: 'B-01-01', qty: 45, unit: 'kg',
    status: '待检', inboundDate: '2026-01-10', expiryDate: '2026-04-20',
    supplierName: '浙江龙盛集团股份有限公司', hazardLevel: 4
  },
  {
    materialCode: 'MAT-009', materialName: '环氧树脂', batchNo: 'BT20260413009',
    location: 'B-01-02', qty: 600, unit: 'kg',
    status: '正常', inboundDate: '2026-04-13', expiryDate: '2027-04-13',
    supplierName: '德国拜耳材料科技(中国)有限公司', hazardLevel: 4
  },
  {
    materialCode: 'MAT-009', materialName: '环氧树脂', batchNo: 'BT20260225008',
    location: 'B-01-02', qty: 120, unit: 'kg',
    status: '冻结', inboundDate: '2025-12-25', expiryDate: '2026-04-15',
    supplierName: '德国拜耳材料科技(中国)有限公司', hazardLevel: 4
  },
  {
    materialCode: 'MAT-010', materialName: '聚氨酯固化剂', batchNo: 'BT20260413008',
    location: 'C-01-01', qty: 300, unit: 'kg',
    status: '正常', inboundDate: '2026-04-13', expiryDate: '2027-01-09',
    supplierName: '德国拜耳材料科技(中国)有限公司', hazardLevel: 4
  },
  {
    materialCode: 'MAT-011', materialName: '消泡剂', batchNo: 'BT20260412010',
    location: 'B-01-04', qty: 100, unit: 'kg',
    status: '正常', inboundDate: '2026-04-12', expiryDate: '2027-04-12',
    supplierName: '毕克化学(上海)有限公司', hazardLevel: 4
  },
  {
    materialCode: 'MAT-012', materialName: '流平剂', batchNo: 'BT20260412011',
    location: 'B-01-04', qty: 80, unit: 'kg',
    status: '正常', inboundDate: '2026-04-12', expiryDate: '2027-04-12',
    supplierName: '毕克化学(上海)有限公司', hazardLevel: 4
  },
  {
    materialCode: 'MAT-013', materialName: '分散剂', batchNo: 'BT20260412012',
    location: 'B-02-01', qty: 120, unit: 'kg',
    status: '正常', inboundDate: '2026-04-12', expiryDate: '2027-04-12',
    supplierName: '毕克化学(上海)有限公司', hazardLevel: 4
  },
  {
    materialCode: 'MAT-014', materialName: '氢氧化钠', batchNo: 'BT20260228014',
    location: 'H-01-01', qty: 1500, unit: '包',
    status: '正常', inboundDate: '2026-02-28', expiryDate: '2028-02-28',
    supplierName: '济南万化化学有限公司', hazardLevel: 3
  },
  {
    materialCode: 'MAT-015', materialName: '过氧化氢', batchNo: 'BT20260115009',
    location: 'H-01-02', qty: 60, unit: '桶',
    status: '正常', inboundDate: '2026-01-15', expiryDate: '2026-04-15',
    supplierName: '济南万化化学有限公司', hazardLevel: 3
  },
  {
    materialCode: 'MAT-015', materialName: '过氧化氢', batchNo: 'BT20251220005',
    location: 'C-01-03', qty: 12, unit: '桶',
    status: '不良品', inboundDate: '2025-12-20', expiryDate: '2026-03-20',
    supplierName: '济南万化化学有限公司', hazardLevel: 3
  },
  {
    materialCode: 'FP-001', materialName: '醇酸调和漆-白色', batchNo: 'SC20260412001',
    location: 'D-01-01', qty: 198, unit: 'kg',
    status: '正常', inboundDate: '2026-04-12', expiryDate: '2027-04-12',
    supplierName: '本厂生产', hazardLevel: 4
  },
  {
    materialCode: 'FP-003', materialName: '聚氨酯面漆-蓝色', batchNo: 'SC20260410002',
    location: 'D-01-04', qty: 150, unit: 'kg',
    status: '正常', inboundDate: '2026-04-10', expiryDate: '2027-04-10',
    supplierName: '本厂生产', hazardLevel: 4
  }
];

// ============================================================
// 8. 盘点计划 (Counting Plans) - 5 items
// ============================================================
MockData.countingPlans = [
  {
    planNo: 'PD2026041400001',
    type: '全库盘点',
    scope: '原料仓(WH-01)全库',
    assignee: '张伟',
    planDate: '2026-04-14',
    status: '盘点中',
    results: [
      { location: 'A-01-01', materialName: '甲苯', bookQty: 1200, actualQty: 1195, diff: -5 },
      { location: 'A-01-02', materialName: '丙酮', bookQty: 640, actualQty: 640, diff: 0 },
      { location: 'A-01-04', materialName: '乙酸乙酯', bookQty: 720, actualQty: 718, diff: -2 },
      { location: 'B-01-01', materialName: '丙烯酸树脂', bookQty: 425, actualQty: 420, diff: -5 },
      { location: 'B-01-02', materialName: '环氧树脂', bookQty: 720, actualQty: 720, diff: 0 }
    ]
  },
  {
    planNo: 'PD2026041000002',
    type: '周期盘点',
    scope: '危化品专用仓(WH-03)G区',
    assignee: '赵刚',
    planDate: '2026-04-10',
    status: '已完成',
    results: [
      { location: 'G-01-01', materialName: '醋酸丁酯', bookQty: 525, actualQty: 525, diff: 0 },
      { location: 'G-01-04', materialName: '环己酮', bookQty: 795, actualQty: 790, diff: -5 },
      { location: 'G-02-01', materialName: '丁醇', bookQty: 800, actualQty: 798, diff: -2 }
    ]
  },
  {
    planNo: 'PD2026040500003',
    type: '动态盘点',
    scope: '成品仓(WH-02)D区-恒温区',
    assignee: '王芳',
    planDate: '2026-04-05',
    status: '已完成',
    results: [
      { location: 'D-01-01', materialName: '醇酸调和漆', bookQty: 250, actualQty: 248, diff: -2 },
      { location: 'D-01-02', materialName: '环氧底漆', bookQty: 180, actualQty: 180, diff: 0 },
      { location: 'D-01-04', materialName: '聚氨酯面漆', bookQty: 200, actualQty: 200, diff: 0 }
    ]
  },
  {
    planNo: 'PD2026041500004',
    type: '周期盘点',
    scope: '危化品专用仓(WH-03)H区-腐蚀品区',
    assignee: '刘明',
    planDate: '2026-04-15',
    status: '待盘点',
    results: []
  },
  {
    planNo: 'PD2026042000005',
    type: '全库盘点',
    scope: '成品仓(WH-02)全库',
    assignee: '王芳',
    planDate: '2026-04-20',
    status: '待盘点',
    results: []
  }
];

// ============================================================
// 9. 危化品台账 (Safety Ledger) - 15 items
// ============================================================
MockData.safetyLedger = [
  {
    materialName: '甲苯', cas: '108-88-3', batchNo: 'BT20260320001',
    inDate: '2026-03-20', inQty: 2000, outDate: '2026-04-12', outQty: 800,
    balance: 1200, location: 'A-01-01', operator: '张伟'
  },
  {
    materialName: '丙酮', cas: '67-64-1', batchNo: 'BT20260318003',
    inDate: '2026-03-18', inQty: 960, outDate: '2026-04-08', outQty: 320,
    balance: 640, location: 'A-01-02', operator: '张伟'
  },
  {
    materialName: '乙酸乙酯', cas: '141-78-6', batchNo: 'BT20260310005',
    inDate: '2026-03-10', inQty: 900, outDate: '2026-04-05', outQty: 180,
    balance: 720, location: 'A-01-04', operator: '李强'
  },
  {
    materialName: '二甲苯', cas: '1330-20-7', batchNo: 'BT20260301002',
    inDate: '2026-03-01', inQty: 1500, outDate: '2026-04-13', outQty: 600,
    balance: 900, location: 'A-02-01', operator: '李强'
  },
  {
    materialName: '环己酮', cas: '108-94-1', batchNo: 'BT20260411013',
    inDate: '2026-04-11', inQty: 795, outDate: '2026-04-13', outQty: 160,
    balance: 635, location: 'G-01-04', operator: '赵刚'
  },
  {
    materialName: '丁醇', cas: '71-36-3', batchNo: 'BT20260308006',
    inDate: '2026-03-08', inQty: 800, outDate: '2026-04-12', outQty: 480,
    balance: 320, location: 'G-02-01', operator: '赵刚'
  },
  {
    materialName: '醋酸丁酯', cas: '123-86-4', batchNo: 'BT20260312007',
    inDate: '2026-03-12', inQty: 700, outDate: '2026-04-03', outQty: 175,
    balance: 525, location: 'G-01-01', operator: '赵刚'
  },
  {
    materialName: '氢氧化钠', cas: '1310-73-2', batchNo: 'BT20260228014',
    inDate: '2026-02-28', inQty: 2000, outDate: '2026-04-11', outQty: 500,
    balance: 1500, location: 'H-01-01', operator: '刘明'
  },
  {
    materialName: '过氧化氢', cas: '7722-84-1', batchNo: 'BT20260115009',
    inDate: '2026-01-15', inQty: 100, outDate: '2026-03-28', outQty: 40,
    balance: 60, location: 'H-01-02', operator: '刘明'
  },
  {
    materialName: '过氧化氢', cas: '7722-84-1', batchNo: 'BT20251220005',
    inDate: '2025-12-20', inQty: 50, outDate: '', outQty: 0,
    balance: 12, location: 'C-01-03', operator: '刘明'
  },
  {
    materialName: '聚氨酯固化剂', cas: '28182-81-2', batchNo: 'BT20260413008',
    inDate: '2026-04-13', inQty: 300, outDate: '', outQty: 0,
    balance: 300, location: 'C-01-01', operator: '张伟'
  },
  {
    materialName: '甲苯', cas: '108-88-3', batchNo: 'BT20260220010',
    inDate: '2026-02-20', inQty: 1500, outDate: '2026-03-15', outQty: 1500,
    balance: 0, location: 'G-01-02', operator: '李强'
  },
  {
    materialName: '丙酮', cas: '67-64-1', batchNo: 'BT20260205011',
    inDate: '2026-02-05', inQty: 800, outDate: '2026-03-10', outQty: 800,
    balance: 0, location: 'A-01-02', operator: '张伟'
  },
  {
    materialName: '环己酮', cas: '108-94-1', batchNo: 'BT20260125012',
    inDate: '2026-01-25', inQty: 600, outDate: '2026-03-20', outQty: 600,
    balance: 0, location: 'G-01-04', operator: '赵刚'
  },
  {
    materialName: '二甲苯', cas: '1330-20-7', batchNo: 'BT20260110013',
    inDate: '2026-01-10', inQty: 1000, outDate: '2026-02-28', outQty: 1000,
    balance: 0, location: 'A-02-01', operator: '李强'
  }
];

// ============================================================
// 10. 操作日志 (Operation Logs) - 15 items
// ============================================================
MockData.operationLogs = [
  {
    time: '2026-04-14 08:02:15',
    operator: '张伟',
    device: 'PDA-007',
    type: '登录',
    content: '仓库主管张伟登录系统',
    detail: '设备PDA-007, IP: 192.168.1.107'
  },
  {
    time: '2026-04-14 08:15:33',
    operator: '李强',
    device: 'PDA-003',
    type: '入库',
    content: '采购入库单RK2026041400002质检扫码',
    detail: '物料: 丙酮(MAT-002), 批次: BT20260413005, 数量: 1000kg, 状态: 质检中'
  },
  {
    time: '2026-04-14 08:30:45',
    operator: '王芳',
    device: 'PC-WMS-01',
    type: '盘点',
    content: '创建盘点计划PD2026041400001',
    detail: '范围: 原料仓(WH-01)全库, 类型: 全库盘点, 指派: 张伟'
  },
  {
    time: '2026-04-14 09:00:12',
    operator: '陈晨',
    device: 'PDA-005',
    type: '出库',
    content: '开始拣货作业CK2026041400002',
    detail: '生产领料单, 物料: 丙烯酸树脂等3项, 目标: 本厂生产车间-涂料线'
  },
  {
    time: '2026-04-14 09:22:08',
    operator: '刘明',
    device: 'PDA-008',
    type: '质检',
    content: '危化品入库质检完成',
    detail: '物料: 丙酮(MAT-002), 批次: BT20260413005, 质检结果: 合格, 纯度: 99.6%'
  },
  {
    time: '2026-04-14 09:45:30',
    operator: '赵刚',
    device: 'PDA-002',
    type: '移库',
    content: '完成移库作业OP2026041400001',
    detail: '物料: 环氧树脂(MAT-009), 从B-01-03移至B-01-02, 数量: 120kg'
  },
  {
    time: '2026-04-14 10:10:55',
    operator: '张伟',
    device: 'PDA-007',
    type: '盘点',
    content: '执行盘点计划PD2026041400001',
    detail: '已盘点库位: A-01-01, 物料: 甲苯, 账面: 1200kg, 实际: 1195kg, 差异: -5kg'
  },
  {
    time: '2026-04-14 10:35:20',
    operator: '孙丽',
    device: 'PDA-004',
    type: '入库',
    content: '完成上架作业RK2026041300003',
    detail: '物料: 丙烯酸树脂(MAT-008), 批次: BT20260413007, 上架库位: B-01-01, 数量: 500kg'
  },
  {
    time: '2026-04-14 11:00:42',
    operator: '陈晨',
    device: 'PDA-005',
    type: '出库',
    content: '拣货完成CK2026041400003',
    detail: '销售出库单, 客户: 立邦涂料, 物料: 乙酸乙酯540kg+醋酸丁酯350kg, 待复核'
  },
  {
    time: '2026-04-14 11:20:18',
    operator: '周涛',
    device: 'PDA-006',
    type: '出库',
    content: '发货复核通过CK2026041400003',
    detail: '复核员: 周涛, 车牌号: 沪A·K8826, 物流: 德邦物流, 运单号: DB20260414001'
  },
  {
    time: '2026-04-13 16:30:00',
    operator: '赵刚',
    device: 'PDA-002',
    type: '质检',
    content: '危化品定期巡检完成',
    detail: '巡检区域: WH-03全仓, 检查项: 温度/湿度/泄漏/标识, 结果: 正常, 温度: 22.5℃, 湿度: 45%'
  },
  {
    time: '2026-04-13 14:15:30',
    operator: '李强',
    device: 'PDA-003',
    type: '入库',
    content: '收货入库RK2026041300004',
    detail: '供应商: 德国拜耳, 物料: 聚氨酯固化剂300kg+环氧树脂600kg, 质检合格已上架'
  },
  {
    time: '2026-04-13 10:00:15',
    operator: '王芳',
    device: 'PC-WMS-01',
    type: '登录',
    content: '系统管理员王芳登录WMS后台',
    detail: '设备PC-WMS-01, IP: 192.168.1.200, 浏览器: Chrome 124'
  },
  {
    time: '2026-04-12 17:00:00',
    operator: '张伟',
    device: 'PDA-007',
    type: '入库',
    content: '生产入库完成RK2026041200005',
    detail: '物料: 醇酸调和漆-白色, 批次: SC20260412001, 入库: 198kg, 差异原因: 生产损耗2kg'
  },
  {
    time: '2026-04-12 15:30:22',
    operator: '孙丽',
    device: 'PDA-004',
    type: '入库',
    content: '助剂入库上架完成RK2026041200006',
    detail: '物料: 消泡剂100kg+流平剂80kg+分散剂120kg, 上架库位: B-01-04/B-02-01'
  }
];

// ============================================================
// 11. 仪表盘统计 (Dashboard Stats)
// ============================================================
MockData.dashboardStats = {
  todayInbound: 28,
  todayOutbound: 45,
  totalSKU: 1156,
  hazardAlerts: 12,
  locationUtilization: 78,
  pendingTasks: [
    { type: '入库', description: '待收货入库单3笔, 含危化品甲苯2吨', priority: '高' },
    { type: '出库', description: '待拣货出库单3笔, 需优先处理CK2026041400001', priority: '高' },
    { type: '质检', description: '丙酮批次BT20260413005质检报告待确认', priority: '中' },
    { type: '盘点', description: '原料仓全库盘点进行中, 已完成60%', priority: '中' },
    { type: '安全', description: '过氧化氢批次BT20251220005已过期, 待报废处理', priority: '高' },
    { type: '移库', description: '环氧树脂冻结批次待移至不良品区', priority: '低' },
    { type: '补货', description: 'B-01-03库位空闲, 丙烯酸树脂需补货', priority: '低' }
  ],
  expiryAlerts: [
    { materialName: '过氧化氢', batchNo: 'BT20251220005', expiryDate: '2026-03-20', daysLeft: -25, qty: 12 },
    { materialName: '过氧化氢', batchNo: 'BT20260115009', expiryDate: '2026-04-15', daysLeft: 1, qty: 60 },
    { materialName: '环氧树脂', batchNo: 'BT20260225008', expiryDate: '2026-04-15', daysLeft: 1, qty: 120 },
    { materialName: '丙烯酸树脂', batchNo: 'BT20260110002', expiryDate: '2026-04-20', daysLeft: 6, qty: 45 }
  ],
  monthlyTrend: [
    { month: '2025-11', inbound: 18500, outbound: 16200 },
    { month: '2025-12', inbound: 22300, outbound: 19800 },
    { month: '2026-01', inbound: 15600, outbound: 14200 },
    { month: '2026-02', inbound: 19800, outbound: 17500 },
    { month: '2026-03', inbound: 24500, outbound: 21300 },
    { month: '2026-04', inbound: 12800, outbound: 10500 }
  ]
};

// ============================================================
// 12. 库内作业 (Warehouse Operations) - 8 items
// ============================================================
MockData.warehouseOps = [
  {
    opNo: 'OP2026041400001',
    type: '移库',
    materialName: '环氧树脂',
    batchNo: 'BT20260225008',
    fromLocation: 'B-01-03',
    toLocation: 'B-01-02',
    qty: 120,
    operator: '赵刚',
    time: '2026-04-14 09:45:30',
    status: '已完成'
  },
  {
    opNo: 'OP2026041400002',
    type: '补货',
    materialName: '丙烯酸树脂',
    batchNo: 'BT20260413007',
    fromLocation: '待上架区',
    toLocation: 'B-01-01',
    qty: 500,
    operator: '孙丽',
    time: '2026-04-14 10:35:20',
    status: '已完成'
  },
  {
    opNo: 'OP2026041400003',
    type: '报废',
    materialName: '过氧化氢',
    batchNo: 'BT20251220005',
    fromLocation: 'C-01-03',
    toLocation: '报废区',
    qty: 12,
    operator: '刘明',
    time: '2026-04-14 14:00:00',
    status: '待执行'
  },
  {
    opNo: 'OP2026041400004',
    type: '移库',
    materialName: '环氧树脂',
    batchNo: 'BT20260225008',
    fromLocation: 'B-01-02',
    toLocation: '不良品区',
    qty: 120,
    operator: '赵刚',
    time: '2026-04-14 15:00:00',
    status: '待执行'
  },
  {
    opNo: 'OP2026041300005',
    type: '移库',
    materialName: '消泡剂',
    batchNo: 'BT20260412010',
    fromLocation: 'B-01-03',
    toLocation: 'B-01-04',
    qty: 100,
    operator: '孙丽',
    time: '2026-04-13 11:20:00',
    status: '已完成'
  },
  {
    opNo: 'OP2026041300006',
    type: '补货',
    materialName: '氢氧化钠',
    batchNo: 'BT20260228014',
    fromLocation: '待上架区',
    toLocation: 'H-01-01',
    qty: 500,
    operator: '刘明',
    time: '2026-04-13 14:30:00',
    status: '已完成'
  },
  {
    opNo: 'OP2026041200007',
    type: '报废',
    materialName: '丙烯酸树脂',
    batchNo: 'BT20251108001',
    fromLocation: 'B-01-03',
    toLocation: '报废区',
    qty: 30,
    operator: '张伟',
    time: '2026-04-12 16:00:00',
    status: '已完成'
  },
  {
    opNo: 'OP2026041400008',
    type: '补货',
    materialName: '流平剂',
    batchNo: 'BT20260412011',
    fromLocation: '待上架区',
    toLocation: 'B-01-04',
    qty: 80,
    operator: '孙丽',
    time: '2026-04-14 11:00:00',
    status: '已完成'
  }
];

// ============================================================
// 13. 系统用户 (Users) - 10 items
// ============================================================
MockData.users = [
  {
    username: 'zhangwei',
    realName: '张伟',
    role: '仓库主管',
    department: '仓储部',
    phone: '138-0001-0001',
    status: '启用',
    lastLogin: '2026-04-14 08:02:15'
  },
  {
    username: 'liqiang',
    realName: '李强',
    role: '收货员',
    department: '仓储部',
    phone: '138-0001-0002',
    status: '启用',
    lastLogin: '2026-04-14 08:10:45'
  },
  {
    username: 'sunli',
    realName: '孙丽',
    role: '上架员',
    department: '仓储部',
    phone: '138-0001-0003',
    status: '启用',
    lastLogin: '2026-04-14 08:08:30'
  },
  {
    username: 'chenchen',
    realName: '陈晨',
    role: '拣货员',
    department: '仓储部',
    phone: '138-0001-0004',
    status: '启用',
    lastLogin: '2026-04-14 08:55:20'
  },
  {
    username: 'zhoutao',
    realName: '周涛',
    role: '发货员',
    department: '仓储部',
    phone: '138-0001-0005',
    status: '启用',
    lastLogin: '2026-04-14 08:12:00'
  },
  {
    username: 'liuming',
    realName: '刘明',
    role: '安环专员',
    department: '安环部',
    phone: '138-0001-0006',
    status: '启用',
    lastLogin: '2026-04-14 08:05:10'
  },
  {
    username: 'zhaogang',
    realName: '赵刚',
    role: '检验员',
    department: '质量部',
    phone: '138-0001-0007',
    status: '启用',
    lastLogin: '2026-04-14 08:20:55'
  },
  {
    username: 'wangfang',
    realName: '王芳',
    role: '系统管理员',
    department: '信息部',
    phone: '138-0001-0008',
    status: '启用',
    lastLogin: '2026-04-13 10:00:15'
  },
  {
    username: 'huanghai',
    realName: '黄海',
    role: '领料员',
    department: '生产部',
    phone: '138-0001-0009',
    status: '启用',
    lastLogin: '2026-04-13 09:30:00'
  },
  {
    username: 'xujun',
    realName: '徐军',
    role: '收货员',
    department: '仓储部',
    phone: '138-0001-0010',
    status: '停用',
    lastLogin: '2026-03-15 17:30:00'
  }
];
