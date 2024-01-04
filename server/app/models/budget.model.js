module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        life: Number,
        youself: Number,
        entertainment: Number,
        gifts: Number,
        charity: Number,
        savings: Number,
        purchases: Number,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Budget = mongoose.model("budget", schema);
    return Budget;
  };