export class Service {
  constructor(instance) {
    this.model = instance
    this.modelName = instance.modelName

    this.createService()
  }

  static create(instance) {
    return new Service(instance)
  }

  createService() {
    this.create = async data => this.model.create(data)

    this.createMany = async data => this.model.insertMany(data)

    this.get = async (value, field, callback) => this.model.findOne(value, field, callback)

    this.getMany = async (value, field, callback) => this.model.find(value, field, callback)

    this.getAll = async () => this.model.collection

    this.getRaw = value => this.model.findOne(value, (err, raw) => raw)

    this.update = async (value, data, field) => this.model.updateOne(value, data, field)

    this.delete = async (value, field) => this.model.deleteOne(value, field)

    this.deleteMany = async (value, field) => this.model.deleteMany(value, field)
  }
}
