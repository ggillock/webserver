# Webserver
Go to Terminal window
npm i
node app.js
http://localhost:8080/m32diff.html

# Deploy to Google Cloud Run
#   Build Docker image
docker build -t gcr.io/lithe-strata-123819/simple-express:0.0.1 .
docker push gcr.io/lithe-strata-123819/simple-express:0.0.1
gcloud run deploy webserver --image gcr.io/lithe-strata-123819/simple-express:0.0.1 --region=us-central1