import { ITodo } from '../types/todo'
import { model, Schema } from 'mongoose'
const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    status: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
)
export default model<ITodo>('Todo', todoSchema)
// 第一个参数是跟 model 对应的集合（ collection ）名字的 单数 形式。 Mongoose 会自动找到名称是 model 名字 复数 形式的 collection
// 参数大写会自动转成小写
