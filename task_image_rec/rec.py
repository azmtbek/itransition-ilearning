import torch
import torchvision.transforms as transforms
from torchvision.datasets import ImageFolder
from torch.utils.data import DataLoader
from PIL import Image
import os

current_directory = os.getcwd()
# Load the trained model
# torch.set_dir(current_directory)

# Directory where the model file is located
model_dir = current_directory

# Name of the model file
model_filename = 'custom_digit_recognition_model.pth'

# Combine directory and filename to get the full path to the model file
model_path = os.path.join(model_dir, model_filename)
model = torch.load(model_path)  # Load your trained model here

# Define transformation to preprocess the images
transform = transforms.Compose([
    transforms.Grayscale(num_output_channels=1),  # Convert to grayscale
    transforms.Resize((28, 28)),  # Resize to 28x28
    transforms.ToTensor(),  # Convert to tensor
    transforms.Normalize((0.5,), (0.5,))  # Normalize
])

# Load the dataset
dataset_dir = os.path.join(current_directory,'digits/')  # Path to your dataset directory
dataset = ImageFolder(root=dataset_dir, transform=transform)

# Create a data loader
data_loader = DataLoader(dataset, batch_size=1, shuffle=False)

# Initialize counts for each digit
digit_counts = {str(i): 0 for i in range(10)}

# Set the model to evaluation mode
model.eval()

# Iterate over the dataset and count the occurrences of each digit
for images, labels in data_loader:
    with torch.no_grad():
        outputs = model(images)
        _, predicted = torch.max(outputs, 1)
        digit = str(predicted.item())
        digit_counts[digit] += 1

# Print the counts for each digit
print("Number of occurrences for each digit:")
for digit, count in digit_counts.items():
    print(f"Digit {digit}: {count}")
