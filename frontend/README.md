
## Set frontend environment variables.

For production modify this line in main.bundle.js to the server for example: https://bench.cs.vt.edu/api/nanoarg. This is the environment for the API. 

For development use localhost: 27856

```javascript
var environment = {
    production: true,
    api_url: 'https://bench.cs.vt.edu/api/nanoarg',
    upload_dir: ''
};
```