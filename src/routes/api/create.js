/*
Create new link in database and return return id
{
  "destinations": [
    {
      "type": "file" | "url",
      "url": "http://www.google.com",
      "meta": {
        "title": "Google",
        "description": "Search engine",
      }
    }
  ],
  }],
  "meta": {
    "title": "Google",
    "description": "Search engines that I really like",
  },
  "options": {
    "slug": "google",
    "display_as": "redirect"
  }
}
*/


/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function post(request) { 
  console.log(request.body);


  return {
    body: {
        id: "sD4",
        slug: "google",
    }
  };
}