import Route from '@ember/routing/route';

export default Route.extend({
    model() {
	    return [
		    {
		        "id": 1,
		        "name": "The Visual Studio Blog"
		    },
		    {
		        "id": 2,
		        "name": ".NET Framework Blog"
		    },
		    {
		        "id": 3,
		        "name": "Blog created from rest"
		    },
		    {
		        "id": 4,
		        "name": "Another Blog"
		    }
		]
    }
});
