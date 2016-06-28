import moment from 'moment';

//export class DateFormatValueConverter {
//  toView(value, format) {
//    return moment(value).format(format);
//  }
//}

export function DateFormatValueConverter() {
	var self = this;
	
	self.toView = function (value, format) {
		var returnValue = '',
			dateFormatted = moment(value).format(format);
		
		if(dateFormatted !== 'Invalid date'){
			returnValue = dateFormatted;
		}
		return returnValue;
	};
	
	//return self;
};