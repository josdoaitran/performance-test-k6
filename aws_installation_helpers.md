## Install Docker and Docker-Compose on AWS Linux 2, then Run a Load Test

```
# Switch to privileged user 'root'
sudo su

# Install Docker + git, enabling the docker process to start on boot
yum install -y docker git
systemctl enable --now docker

# Install Docker-Compose
curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/bin/docker-compose
chmod +x /usr/bin/docker-compose

# Download a template for running load tests
git clone https://github.com/luketn/docker-k6-grafana-influxdb.git
cd docker-k6-grafana-influxdb

# Start InfluxDB time-series database and Grafana visualisation dashboard
docker-compose up -d influxdb grafana

#TODO: Add an executable script 'load-test' which runs docker-run and a symbolic link to /etc/load-test/scripts from the code folder
# (Include the current IP address in the output to console so you can click the link)

# Run sample load test against the Star Wars API
docker-compose run k6 run /scripts/ewoks.js

```

