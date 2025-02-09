import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// 创建Api对象
// createApi() 用来创建RTKQ中的配置对象
// RTKQ中的所有功能都需要该配置对象完成，需要一个对象作为参数
const studentApi = createApi({
    reducerPath: "studentApi", // Api的标识，不能与其他的Api或reducer重名
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1337/api/",
    }), // 指定查询的基础信息，发送请求使用的工具
    tagTypes: ["student"], // 用来指定请求的标签，用来区分请求
    // endpoints用来指定请求的配置对象
    endpoints(build) {
        // build是一个请求的构建器，通过build来设置请求的相关信息
        return {
            getStudents: build.query({
                // build.query() 用来创建查询的配置对象
                // query用来指定查询的相关信息，是一个方法
                // 该方法需要一个对象作为参数，该对象中可以指定请求的url、请求的参数、请求的类型、请求的格式、请求的返回值的格式
                // 该方法返回一个对象，该对象中可以指定请求的url、请求的参数、请求的类型、请求
                query() {
                    // 用来返回请求的子请求
                    return "students"
                },
                // transformResponse：用来转换数据的格式
                transformResponse(baseQueryReturnValue, meta) {
                    return baseQueryReturnValue.data
                },
                providesTags: [{ type: "student", id: "LIST" }],
                // providesTags(baseQueryReturnValue, meta) {
                //     // 用来返回请求的标签
                //     return [{ type: "student", id: meta.arg.studentId }]
                // },
            }),
            getStudnetById: build.query({
                query(id) {
                    return `students/${id}`
                },
                transformResponse(baseQueryReturnValue, meta) {
                    return baseQueryReturnValue.data
                },
                keepUnusedDataFor: 5, // 设置缓存的时间，单位为秒，默认为60s
                invalidatesTags: (result, error, id) => [
                    { type: "student", id },
                ],
            }),
            delStudent: build.mutation({
                query(id) {
                    return {
                        // 如果发送的不是get请求，需要返回一个对象来设置请求的参数
                        url: `students/${id}`,
                        method: "DELETE",
                    }
                },
                invalidatesTags: (result, error, id) => [
                    { type: "student", id },
                    { type: "student", id: "LIST" },
                ],
            }),
            addStudent: build.mutation({
                query(stu) {
                    return {
                        url: "students",
                        method: "POST",
                        body: { data: stu },
                    }
                },
                invalidatesTags: [{ type: "student", id: "LIST" }],
            }),
            updateStudent: build.mutation({
                query(stu) {
                    return {
                        url: `students/${stu.id}`,
                        method: "PUT",
                        body: { data: stu.attributes },
                    }
                },
                invalidatesTags: (result, error, stu) => [
                    { type: "student", id: stu.id },
                    { type: "student", id: "LIST" },
                ],
            }),
        }
    }, //endpoints用来指定函数中的各种功能，是一个方法,需要一个对象作为返回值
})

// Api对象创建以后，对象中会根据各种方法自动生成钩子函数
// 钩子函数的命名规则：getStudent --> useGetStudentsQuery
export const {
    useGetStudentsQuery,
    useGetStudnetByIdQuery,
    useDelStudentMutation,
    useAddStudentMutation,
    useUpdateStudentMutation,
} = studentApi

export default studentApi
