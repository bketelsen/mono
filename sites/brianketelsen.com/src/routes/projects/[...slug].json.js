import {store} from '../../projectstore';
import {reply} from '../../services/http';

export function get(req, res, next) {
	const slug  = req.params.slug;
	const post = store.get(slug[0]);
	reply(res, post);
}
