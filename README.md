# wine-list-deployment

The deployment scripts and configuration for the wine-list app.

## Deployment steps

Copy the .env.example into .env

`cp .env.example .env`

Update the .env file 

`vi .env`

Run the deployment

`npm run start`

or 

`docker-compose  up --build -d`

## Uninstall docker

https://askubuntu.com/questions/935569/how-to-completely-uninstall-docker

run to see whats installed
`dpkg -l | grep -i docker`

pass them into this
`sudo apt-get purge -y`
`sudo apt-get autoremove -y --purge`

remove images and containers

```
sudo rm -rf /var/lib/docker /etc/docker \
sudo rm /etc/apparmor.d/docker \
sudo groupdel docker \
sudo rm -rf /var/run/docker.sock \
sudo rm -rf /var/lib/containerd
```

## Install docker

https://docs.docker.com/engine/install/ubuntu/

setup apt repo

```
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

install latest version

`sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin`

verify
`sudo docker run hello-world`

add user to group

`sudo groupadd docker`

`sudo usermod -aG docker $USER`

restart

`newgrp docker`

`docker run hello-world`

## install docker compose

`sudo apt-get update`
`sudo apt-get install docker-compose-plugin`