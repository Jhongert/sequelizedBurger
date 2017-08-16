module.exports = function(sequelize, DataTypes){
	var Burger = sequelize.define("Burger", {
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
      			notEmpty: {
        			msg: "Please enter a burger name."
      			}
			}
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		date: {
			type: DataTypes.DATE,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		timestamps: false
	});

	Burger.associate = function(models) {
	    Burger.hasOne(models.Customer, {
	      	onDelete: "cascade"
	    });
	};

	return Burger;
}