#!/bin/bash

# Function to display help message
show_help() {
    echo "Food Delivery Docker Management Script"
    echo "Usage: ./docker-scripts.sh [command]"
    echo ""
    echo "Commands:"
    echo "  build     - Build all containers"
    echo "  up        - Start all containers"
    echo "  down      - Stop and remove all containers"
    echo "  logs      - Show logs from all containers"
    echo "  clean     - Remove all containers and volumes"
    echo "  help      - Show this help message"
}

# Function to build containers
build_containers() {
    echo "Building containers..."
    docker-compose build
}

# Function to start containers
start_containers() {
    echo "Starting containers..."
    docker-compose up -d
}

# Function to stop containers
stop_containers() {
    echo "Stopping containers..."
    docker-compose down
}

# Function to show logs
show_logs() {
    echo "Showing logs..."
    docker-compose logs -f
}

# Function to clean everything
clean_containers() {
    echo "Cleaning containers and volumes..."
    docker-compose down -v
    docker system prune -f
}

# Main script logic
case "$1" in
    "build")
        build_containers
        ;;
    "up")
        start_containers
        ;;
    "down")
        stop_containers
        ;;
    "logs")
        show_logs
        ;;
    "clean")
        clean_containers
        ;;
    "help"|"")
        show_help
        ;;
    *)
        echo "Unknown command: $1"
        show_help
        exit 1
        ;;
esac 