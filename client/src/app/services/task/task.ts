export interface Task {
  id: number;
  taskName: string;
  taskDescription: string;
  taskType: string;
  tags: TaskTags[];
  category: string;
  createDate: string;
  createBy: string;
  modifyDate: string;
  modifyBy: string;
  deadlineFrom: string;
  deadlineTo: string;
  priority: string;
  expectedTime: string;
  resources: string;
  status: number;
  order: number;
}

export interface TaskTags {
  display: string;
  value: string;
}
