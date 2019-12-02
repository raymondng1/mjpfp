const { db, Model } = require('./index.js');
const moment = require('moment'); //this library will help get the current dates and months

const weekdays = moment.weekdays(); //This will get an object of the weekdays startings with sunday [Sunday, Monday, Tuesday .... ]
const months = moment.months(); //This will will get the months

let dateObject = {
	dateContext: moment()
};

const currentDate = () => {
	return dateObject.dateContext.get('date');
};
const currentDay = () => {
	return dateObject.dateContext.format('D');
};

const today = moment(new Date()).add(0, 'days'); 
const tomorrow = moment(new Date()).add(1, 'days');

const generateSingleModel = (num = 0) => {
	const date = moment(new Date()).add(num, 'days').format('ddd, ll'); // This will format the date to form number format to string
	const to_do = null;
	return { date, to_do };
};

const generateModels = numModels => {
  let increment = 0;
  //need to increment the 0 by 1 each time it is generated
	return Array(numModels)
		.fill('')
		.map(() => generateSingleModel(increment++));
};

const createModels = numModels => {
	const allModels = generateModels(numModels);
	return Model.bulkCreate(allModels);
};

const seed = numModels => {
	db.sync({ force: true })
		.then(() => {
			console.log('seeding');
			return createModels(numModels);
		})
		.then(() => {
			console.log('complete');
		})
		.catch(error => {
			console.log(error);
		});
};

seed(31); //This will generate the number of records in the database
