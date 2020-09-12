const functions = require('firebase-functions');

const express = require("express");

const cors = require("cors");
const { response, request } = require('express');

const stripe = require("stripe")('sk_test_51HPvSnKhjiyVN5KiP3YXzLzeDn2q3guB8LqEx7LgnafBR2DAhrZFvk9BWiPOQuaG2sMLzn9s5cdwPVEuZJMrJvgp00Lq0RcJAk')

//API

//App config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;

	console.log('Payment request received BOOM!!', total);
	
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "inr",
	});

	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

//Listen command

exports.api = functions.https.onRequest(app)

// eg endpoint
// http://localhost:5001/clone-2139e/us-central1/api