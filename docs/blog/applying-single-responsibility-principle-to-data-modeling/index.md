---
title: 'Applying Single Responsibility Principle to Data Modeling'
created_at: "2020-09-19T17:52:38.771Z"
description: Models should only have one responsibility
state: published
image: '/applying-single-responsibility-principle-to-data-modeling/image-redaction.jpg'
tags:
  - SRP
  - Data Modeling
---

![image-redaction-example](/applying-single-responsibility-principle-to-data-modeling/image-redaction.jpg)

# Applying Single Responsibility Principle to Data Modeling

Single Responsibility Principle affects all areas of the application. It states that each [software module should have one and only one reason to change](https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html). This Principle applies as equally to application code as it does to Data modeling. Let's take an example application.

I want to build an image redaction service that removes any PII (Personally identifiable information) from images. Initially, the plan is to have human `redactors` draw black boxes on areas of an image that have PII. For example, on a W-2 form, the name and SSN field would be covered by a black box. After the image was verified to have no PII or all personal information was hidden by a black box it is then emailed to the customer. How would you design this app?

My first step would be to create an `image` model with the status enum of `[unverified, verificiation_in_progress, verified, emailed]`. As the image goes through each step its status gets updated. However, in the middle of designing this app, an additional business requirement was added. We want some portion of images to go through an auditing process. The auditing process needs the original process as well as the list of rectangles describing the black boxes drawn by the redactors. How should this new state be implemented in the `image` model? My initial idea would be to simply add `auditing` to the status enum, however, that seems like a code smell. Though this is a contrived example; I have come across and also caused this `status creep` many times in my career. What is the solution?

Well, this requires thinking back to our `image` model. Does this model obey the Single Responsibility Principle? It's true that in all these states we are dealing with an image but the responsibility of that image changes. In the first part, an image is responsible for getting verified to have no PII or redacted. In the second part, the image with the black boxes burnt into it is responsible for getting shared with the final user. The auditing would never happen in the second part because there is no way to remove the black boxes after they are burnt into the image. Like Robert Martin mentions [this principle is about people](https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html). Therefore, it's worth figuring out who the intended audience is for this image. Turns out there are two separate groups of people. In the first part, the `image` model is serving as a platform for a team of redactors. In the second part, it is being used by the original customer to do whatever they like with it. (In this case, getting the verified image emailed to them.). When I mash these two very different responsibilities into one model I am setting myself up for failure.

So let's break this up. Let's create a `raw_image` to handle the responsibility of verification/redaction. And `final_image` that is responsible for being emailed to the user. This clarifies a lot of ambiguities. There is now no way of accidentally emailing images with PII because of a miswritten SQL query filtering on the wrong status. The access control pattern for the `final_image` can be simplified significantly. Also, each model can change independently as new business requirements emerge instead of a gigantic `image` model that gets saddled with everything (similar to `user` models in many apps). Hope this helps.