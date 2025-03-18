import { ref } from "vue";
import { clone, cloneDeep, merge } from "lodash";
export function usePage({ _apiFun = () => {}, _data = {} }) {
  // 表格数据
  const formData = ref([]);

  // 加载状态
  const loading = ref(false);

  // 查询数据
  const queryData = ref({ ..._data });

  // 分页
  const pageInfo = ref({
    currentPage: 1,
    pageSize: 15,
    pageSizeArr: [15, 20, 30],
  });
  /**
   * 总页数
   */
  const total = ref(0);
  /**
   * 获取列表
   */
  const handleGetList = async () => {
    loading.value = true;
    let res = await _apiFun({
      ..._data,
      currentPage: pageInfo.value.currentPage,
      pageSize: pageInfo.value.pageSize,
      ...queryData.value,
    });
    if (res.success) {
      console.log(res, "rrrr");

      if (res.pageInfo?.list) {
        formData.value = res.pageInfo.list;
        total.value = res.pageInfo.total;
      } else if (res.entity) {
        formData.value = res.entity;
        total.value = res.total;
      }
    }
    loading.value = false;
  };
  /**
   * 加载
   */
  const handleLoad = (bool = false) => {
    if (bool) {
      pageInfo.value.currentPage = 1;
      total.value = 0;
      formData.value = [];
    }
    handleGetList();
  };

  // 页面显示个数
  const handlePageSizeChange = (size) => {
    pageInfo.value.pageSize = size;
    // 调取刷新页面接口
    handleLoad();
  };

  /**
   * 更新查询数据
   */
  const updateQueryData = (newQueryData) => {
    queryData.value = newQueryData;
    handleLoad();
  };
  // 页面切换时
  const handleCurrentChange = (size) => {
    pageInfo.value.currentPage = size;
    // 调取刷新页面接口
    handleLoad();
  };

  return {
    formData,
    loading,
    pageInfo,
    total,
    queryData,
    handleGetList,
    handleLoad,
    handlePageSizeChange,
    handleCurrentChange,
    updateQueryData,
  };
}
