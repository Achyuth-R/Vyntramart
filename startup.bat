@echo off
start "" "mvnw" spring-boot:run
TIMEOUT /T 15
start "" http://localhost:8080/index.html