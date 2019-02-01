import _ from 'lodash';
import { REZRV_INPUT_CHANGE, REZRV_CREATE_REQUEST, PARK_LIST_SUCCESS, CAR_LIST_SUCCESS, REZERV_LIST_SUCCESS_NOTFY } from '../actions/types';

INITIAL_STATE = {
    otopark: '',
    arac: '',
    baslangicSaati: '',
    bitisSaati: '',
    parks: '',
    cars: '',
    max_park_name:'',
    max_park_id:''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REZRV_INPUT_CHANGE:
            return { ...state, [action.payload.props]: action.payload.value };
        case REZRV_CREATE_REQUEST:
            return { ...state };
        case PARK_LIST_SUCCESS:
            return { ...state, parks: action.payload };
        case CAR_LIST_SUCCESS:
            return { ...state, cars: action.payload };
        case REZERV_LIST_SUCCESS_NOTFY:
            function sortProperties(obj) {
                // convert object into array
                var sortable = [];
                for (var key in obj)
                    if (obj.hasOwnProperty(key))
                        sortable.push([key, obj[key]]); // each item is an array in format [key, value]

                // sort items by value
                sortable.sort(function (a, b) {
                    return b[1] - a[1]; // compare numbers
                });
                return sortable// array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
            }
            var park_id = { "2": 0, "3": 0, "4":0, "5":0 };                 
            for (i = 0; i < action.payload.length; i++) { 
                for (j = 0 ; j < Object.keys(park_id).length; j++) {                   
                    if (parseInt(Object.keys(park_id)[j]) == action.payload[i].park.id)
                    {
                        park_id[Object.keys(park_id)[j]] = park_id[Object.keys(park_id)[j]]+1
                    }
                       //else console.log('as');                                      
                }               
            }
            console.log(park_id); 
            var sortedParks = sortProperties(park_id);
            console.log(sortedParks[0][0]);
            switch (sortedParks[0][0]) {
                case '2':
                    id = 2
                    name = "YomraPark";
                    break;
                case '3':
                    id = 3
                    name = "BeşirliPark";
                    break;
                case '4':
                    id = 4
                    name = "ForumPark";
                    break;
                case '5':
                    id = 5
                    name = "FarabiPark";
                    break;
            }
            console.log(name);
            //console.log(max_park_name);
            
            return { ...state, max_park_name: name, max_park_id: id }
                    
        default:
            return state;
    }
};