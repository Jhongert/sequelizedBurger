module.exports = function(sequelize, DataTypes){
	var Customer = sequelize.define("Customer", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
      			notEmpty: {
        			msg: "Please enter a customer name."
      			}
			}
		}
	}, {
		timestamps: false
	});

	Customer.associate = function(models) {
	    Customer.belongsTo(models.Burger, {
	      	foreignKey: {
	        	allowNull: false
	      	}
	    });
	};

	return Customer;
}