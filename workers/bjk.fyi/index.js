addEventListener('fetch', event => {
  if (event.request.method == 'POST') {
    event.respondWith(handlePost(event.request))
  } else {
    event.respondWith(handleRequest(event.request))
  }
})

async function handlePost(request) {
  const json = await request.json();

  /*
      return new Response(JSON.stringify(json), {
        status: Number(201)
      });
  */
  if (json.model === 'redirect') {
    await SHORT_KV.put(json.entry.short, json.entry.to)

    if (json.entry.hasOwnProperty('alias')) {
      if (json.entry.code.length > 1) {
        await SHORT_KV.put(json.entry.short + '-alias', json.entry.alias);
      }
    }

    if (json.entry.hasOwnProperty('code')) {

      if (json.entry.code.length > 1) {
        await SHORT_KV.put(json.entry.short + '-code', json.entry.code);
      }
    }
    if (json.entry.hasOwnProperty('source')) {

      if (json.entry.source.length > 1) {
        await SHORT_KV.put(json.entry.short + '-source', json.entry.source);
      }
    }
    return new Response('created' + JSON.stringify(json), {
      status: Number(201)
    });

  }
  return new Response('Failed', {
    status: Number(400)
  });

}

async function handleRequest(request) {
  const url = new URL(request.url);
  uri = url.pathname.replace(/^\/|\/$/g, '');
  const value = await SHORT_KV.get(uri)
  if (value === null) {
    return new Response('', {
      status: Number(301),
      headers: {
        'Location': 'https://brianketelsen.com/pages/not-found?slug=' + uri
      }
    });
  }

  const code = await SHORT_KV.get(uri + '-code');
  let extra = ''
  if (code === null || code.length < 1) {
    return new Response('', {
      status: Number(301),
      headers: {
        'Location': value
      }
    });
  }
  // we have a code
  extra = '?wt.mc_id='
  extra = extra + code

  const source = await SHORT_KV.get(uri + '-source');
  if (source === null || source.length < 1) {
    return new Response('', {
      status: Number(301),
      headers: {
        'Location': value
      }
    });
  }
  // we have a source
  extra = extra + '-' + source
  const alias = await SHORT_KV.get(uri + '-alias');
  if (alias === null || alias.length < 1) {
    return new Response('', {
      status: Number(301),
      headers: {
        'Location': value
      }
    });
  }
  // we have an alias
  extra = extra + '-' + alias
  return new Response('', {
    status: Number(301),
    headers: {
      'Location': value + extra
    }
  });
}