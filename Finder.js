const express = require("express");
const app = express();
const axios = require("axios")
app.get("/github_users/:name", (req, res) => {
	axios ({
		url:"https://api.github.com/users/"+req.params.name
	})
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			console.log(err)
			res.status(err.status||404);
			res.send({
				error:{
					status:err.status||404,
					message: err.message
				}
			})
			
		});
});
app.listen(3000, () => {
	console.log("Server is working wait for sometime ---");
});

    