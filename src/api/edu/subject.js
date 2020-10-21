import request from '@/utils/request'

export default {

  // 1、课程分类列表（条件分页查询）
  getSubjectList() {
    return request({
      // 两种url写法选一种用
      //   url: '/eduservice/edu-teacher/pageTeacherCondition/' + current + '/' + limit,
      url: '/eduservice/subject/getAllSubject',
      method: 'get'
    })
  }
}
