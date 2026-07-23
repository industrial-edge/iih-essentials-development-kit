## Extracting the Open Source Software Files from the Docker Image

### Prerequisites

- Docker installed and running
- Access to Dockerhub
- Terminal open in that directory

### Steps

1. Pull the image (choose desired tag version. e.g. 2.6.0):

   ```bash
   docker pull siemensindustrialedge/dataservicedevelopmentkit:2.6.0
   ```

2. Create a container:

   ```bash
   docker create --name developmentkit siemensindustrialedge/dataservicedevelopmentkit:2.6.0
   ```

3. Copy files:

   ```bash
   docker cp developmentkit:/home/edge/OpenSourceSoftware.zip ./
   docker cp developmentkit:/home/edge/ReadMe_OSS.html ./
   ```

4. Verify extraction:

   ```bash
   ls -la
   ```

   You should see `OpenSourceSoftware.zip` and `ReadMe_OSS.html`.

5. Clean up:

   ```bash
   docker rm developmentkit
   ```
