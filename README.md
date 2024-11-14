# dropix

This project defines a basic website for a Cash on Delivery store. It gets a
title, subtitle, video url and products list from an external API and displays
them to the user. On clicking to order a product a Dialog is opened for the user
to enter their information which is then sent to the external API.

Although the complexity of the project is small, there is an API handler to deal
with communication with the external API which better separates the concerns of
each layer. Additionaly, a context has been set up to avoid prop drilling within
the Dialog components.

A few libraries have been used:

- axios (HTTP client)
- headless ui (unstyled accessible UI components)
- react-input-mask (mask)
- react-hook-form (form / input management)
- tailwind (css)
- zod (validation)

Due to the nature of a small technical challenge, the website has been kept
simple and small on purpose. Future improvements would revolve around UI style,
addition of new routes (e.g. product details) and new features (e.g. shopping
cart)
