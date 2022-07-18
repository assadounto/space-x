import http from './http';

const getRockets = () => http.get('rockets');
const getMission = () => http.get('missions');

const bookService = {
    getRockets
  , getMission
};


export default bookService;
