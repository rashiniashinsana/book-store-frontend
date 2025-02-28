# BookBell React Native Application 📚🔔


**Overview**  

BookBell is a user-friendly React Native application designed for book enthusiasts to explore, purchase, and manage their favorite reads. With a seamless browsing experience, users can discover popular books, browse by category, add favorites, and manage their cart for easy checkout. Built with a modern and efficient tech stack, BookBell ensures a smooth and engaging experience for book lovers on the go. 📚✨


The system is structured to handle the following core features:

- Pet Management: Add, update, view, and delete pet profiles, including detailed information such as age, breed, health status, and images.
- Adopter Management: Manage adopter profiles, including personal details and adoption history.
- Adoption Requests: Submit and track adoption requests, including their approval status and associated pet.
- Pet Adoption Process: Facilitate the process from pet viewing to adoption confirmation, ensuring transparency and efficient communication between adopters and admins.

 

---

### **Main Features**  

BookBell is a React Native application designed to provide a seamless book-shopping experience. The app features four main tabs:  

📚 **Home** – Explore trending and recommended books.  
📖 **Books** – Browse and search for books across various genres.  
📰 **Magazines** – Discover a collection of popular magazines.  
🛒 **Cart** – Manage selected books and magazines for easy checkout.  

With an intuitive interface and smooth navigation, BookBell makes book shopping convenient and enjoyable for all readers. 🚀✨

### **Technologies Used (Client-Server Architecture)**  

#### **Frontend:**  
- React Native  
- TypeScript  
- Redux & Redux Thunk  

#### **Backend:**  
- Node.js & Express.js  

#### **Authentication:**  
- JWT-based authentication  

#### **Database & ORM:**  
- MySQL & Prisma ORM  

#### **State Management:**  
- Redux with Redux Thunk  

#### **API Development:**  
- RESTful APIs using Express.js  

#### **File Handling:**  
- Cloud storage for book and magazine cover images  

BookBell ensures a smooth and engaging reading experience with a scalable and responsive design. 🚀📖
Here’s your **Getting Started** guide, tailored for your **React Native app using Expo**:  

---

## 🚀 **Getting Started**  

### **1. Clone the Repository**  
Run the following command to clone the source code:  
```bash
git clone https://github.com/rashiniashinsana/Book_Bell_store.git
```
Navigate into the project directory:  
```bash
cd Book_Bell_store
```

### **2. Install Dependencies**  
Install the required dependencies using:  
```bash
npm install
```

### **3. Configure Environment Variables**  
Create a `.env` file in the root directory and add necessary environment variables, such as the API URL:  
```env
API_URL=http://localhost:4000/books
```
Ensure you load environment variables correctly in your app using `expo-config` or `react-native-dotenv`.  

### **4. Start the Application**  
Run the following command to start your Expo development server:  
```bash
npx expo start
```
This will open the Expo Developer Tools, allowing you to run the app on an emulator, physical device, or Expo Go.  

### **5. Run on a Device or Emulator**  
- **For Android:** Press `a` to launch on an Android emulator or scan the QR code with Expo Go.  
- **For iOS:** Press `i` to run on an iOS simulator (Mac users only).  

### **6. Verify the Application**  
Check that the app loads properly and the navigation between **Home, Books, Magazines, and Cart** tabs works smoothly. Ensure API connections are functioning correctly.  

Now you’re ready to explore **BookBell**! 🚀📚
## License

This project is licensed under the MIT License. For more information, view the LICENSE file.
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/rashiniashinsana/Book_Bell_store/blob/master/LICENSE.md)