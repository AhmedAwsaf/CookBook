# Cook Book - Recipe Sharing Platform

## Table of Contents

1. [Introduction](#introduction)
2. [Functional Requirements](#functional-requirements)
3. [User Manual](#user-manual)
4. [Frontend Development](#frontend-development)
5. [Backend Development](#backend-development)
6. [Technologies Used](#technologies-used)
7. [Individual Contribution](#individual-contribution)

## Introduction

**Cook Book** is a recipe sharing website with an integrated minimart, designed to enhance the culinary experience by offering a unified platform where users can:

- Share their favorite recipes.
- Discover new recipes.
- Purchase ingredients directly from the minimart.

The platform addresses several challenges in the modern culinary world by combining recipe discovery, ingredient shopping, and community interaction in one cohesive system.

<div align="center">
  <img width="500" height="auto" alt="3" src="https://github.com/user-attachments/assets/e4139c9f-7478-4a64-a5d6-bb9d00c3ad9d" />
</div>

### Key Features:
- **Community Building**: Users can share, like, and comment on recipes, building a vibrant cooking community.
- **Streamlined Cooking Journey**: From discovering recipes to buying ingredients, the entire process is simplified.
- **Personalization**: Tailored recipe recommendations based on user preferences and dietary needs.
- **Admin Dashboard**: Allows admins to manage recipes, users, and minimart inventory, ensuring smooth operations.

## Functional Requirements

### Module 1: User Management
- **User Login**: Login using email and password.
- **Account Creation**: Sign up with email, username, and password.
- **Account Verification**: Verify email after registration.
- **Password Recovery**: Forgot password functionality for account recovery.
- **User Profile**: Edit or delete profile details.

<div align="center">
  <img width="500" height="auto" alt="30" src="https://github.com/user-attachments/assets/6d7b3270-9697-4626-8891-c09cfde6bfd2" />
</div>

### Module 2: Recipe Management
- **Add Recipe**: Users can upload recipes.
- **View Recipe Details**: Explore ingredients, instructions, and more.
- **Search and Filter Recipes**: Search for specific recipes or browse by category.
- **Like and Comment on Recipes**: Engage with recipes through likes and comments.
- **Minimart Integration**: Search for ingredients, add to cart, and checkout.

<div align="center">
  <img width="500" height="auto" alt="32" src="https://github.com/user-attachments/assets/0520ee3d-6025-4e47-b57a-fb717de6ad1c" />
</div>

### Module 3: Admin Panel
- **Admin Dashboard**: Manage users, recipes, and minimart inventory.
- **Permissions Management**: Admins can assign and manage user roles.
- **Order Management**: Admins can view and manage orders, including delivery status.
- **Recipe and User Moderation**: Approve, delete, or edit recipes and user content.

## User Manual

### Homepage
The homepage displays the most liked recipe and the four most recently uploaded recipes. It serves as the entry point for users to explore and discover new content.

### Search Functionality
Users can search for recipes by keyword or browse through categories such as breakfast, lunch, desserts, and more.

### User Authentication
- **Sign Up**: New users can create an account using their email, username, and password.
- **Login**: Existing users can log in using their registered credentials.
- **Forgot Password**: Users can reset their password via email.
- **Email Verification**: To ensure authenticity, users must verify their email before interacting with the platform fully.

### Admin Panel
The admin panel provides complete control over the platform, including:
- **User Management**: View, delete, or manage user accounts.
- **Recipe Approval**: Admins can moderate and approve or remove user-submitted recipes.
- **Minimart Management**: Add, update, or delete items from the minimart.

<div align="center">
  <img width="500" height="auto" alt="18" src="https://github.com/user-attachments/assets/0ac0db0d-d19f-4101-9711-44988fa46e4e" />
</div>

### Recipe Management
Users can:
- **Create and Edit Recipes**: Submit new recipes or update existing ones.
- **View Recipe Details**: Explore the full details of any recipe uploaded on the platform.

### Minimart
The integrated minimart allows users to buy ingredients directly:
- **Search and Filter**: Quickly find ingredients based on category.
- **Cart System**: Add items to the cart, adjust quantities, and proceed to checkout.
- **Payment Checkout**: Secure payment gateway for purchasing items.

<div align="center">
  <img width="500" height="auto" alt="41" src="https://github.com/user-attachments/assets/557c3ed8-165c-42a8-830d-0fc2590c93c7" />
</div>

## Frontend Development

The frontend is built using React, TailwindCSS, and Vite.js for a fast, responsive, and visually appealing user experience.

### Key Components:
- **UserProfilePage**: Displays the user’s profile, including their uploaded recipes and activity.
- **CreateRecipe**: Form for users to submit new recipes.
- **Search**: Allows users to search for recipes and ingredients.
- **Minimart**: The e-commerce system for browsing and purchasing ingredients.
- **Cart and Checkout**: Users can manage their cart and proceed to checkout.

## Backend Development

The backend is developed using Node.js, Express.js, and MongoDB to handle user authentication, recipe management, and minimart transactions.

### Key Features:
- **User Authentication**: JWT tokens for secure login and user management.
- **Recipe and Ingredient Management**: CRUD operations for recipes and minimart items.
- **Order Management**: Admins can view and manage orders.

## Technologies Used

- **MongoDB**: Database for storing user and recipe data.
- **Express.js**: Backend framework for handling API requests.
- **React (Vite.js + Tailwind)**: Frontend framework for building the user interface.
- **Node.js**: JavaScript runtime for the server environment.
- **JavaScript (JSX)**: Main programming language for both frontend and backend development.


## Individual Contribution
<div align="center">

| Contributor        | GitHub Profile                                                                                 | Followers                                                                                           | Contribution                                                                                                                                           |
|--------------------|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Ahmed Awsaf**    | [![Ahmed's GitHub](https://img.shields.io/badge/-AhmedAwsaf-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AhmedAwsaf) | ![Followers](https://img.shields.io/github/followers/AhmedAwsaf?label=Follow&style=social)          | Admin panel development, backend of mini mart item management, checkout system, user management, recipe management, email verification, cart system. |
| **Zarin Syara Eqra** | [![Zarin's GitHub](https://img.shields.io/badge/-ZarinSyaraEqra-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Eqrasyara) | ![Followers](https://img.shields.io/github/followers/Eqrasyara?label=Follow&style=social)        | Frontend of signup, login, user profile, edit profile, add recipe, view recipe details, comment section, cart system, minimart, visiting other profiles. |
| **Tayeba Rounak Karim** | [![Tayeba's GitHub](https://img.shields.io/badge/-TayebaRounakKarim-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/TayebaRounak) | ![Followers](https://img.shields.io/github/followers/TayebaRounak?label=Follow&style=social)    | Frontend and backend of homepage, recipe search, recipe category wrapper, minimart search, signup (password hashing) and login.                        |

</div>
