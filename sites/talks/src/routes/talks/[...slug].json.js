import {store} from '../../talkstore';
import {reply} from '../../services/http';
import { DEFAULT_LANG } from '../../conf';

export function get(req, res, next) {
	console.log(req.params)
	const {slug}  = req.params;
	const talk = store.get(slug[0]);

	console.log(talk);
	// TODO consider adding lang for categories
	reply(res,talk);
}
