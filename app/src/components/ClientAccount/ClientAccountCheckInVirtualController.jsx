
import { queryBuilder } from '../Shared/Utils.js';
function getLastCheckIn(userId, callback) {
// construct query
    const api = "https://us-central1-summit-app-6f288.cloudfunctions.net/getUserLastCheckIn?"
    const query = queryBuilder(api)
                    .param('user_id').val(userId)
                    .getUrl();

    // query
    try {
        fetch(query).then(res => {
            // return true upon successful call
            if(res.status === 200) {
                res = res.json();

                res.then(({ lastCheckIn }) => {
                    callback(lastCheckIn);
                });
            } else {
                return null;
            }
        }).catch(error => {
            return null;
        });
    } catch (e) {
        return null;
    }

}
export default getLastCheckIn;
