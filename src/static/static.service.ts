import { Injectable } from '@nestjs/common';
import { identity } from 'rxjs';
import { CreateStaticDto } from './dto/create-static.dto';
import { UpdateStaticDto } from './dto/update-static.dto';

@Injectable()
export class StaticService {
  secondSection() {
    return {
      title: 'About Petology',
      body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.',
    };
  }
  firstSection() {
    return {
      title: 'Not only people need a house',
      body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est. ',
    };
  }

  findOne(params: { id: number }) {
    if (params.id == 1) {
      return {
        title: 'How you feed Your dog?',
        body: 'As a general rule, puppies and young dogs burn more calories, so they need a greater quantity of food that is higher in protein and fat. Older, less active dogs require fewer calories to remain healthy.\n\nRichard H. Pitcairn, DVM, PhD, author of Dr. Pitcairn’s Complete Guide to Natural Health for Dogs and Cats, believes the most reliable approach is to feed what seems to be a reasonable amount and monitor his body weight.\n\n“You should be able to feel your pet’s ribs easily as you slide your hand over his sides,” Pitcairn says. “If you can’t, he’s probably too heavy, so begin to feed a smaller quantity.”\n\n\nIf you’re using a commercial pet food, beware of the “feeding guidelines” on the bag or box. It lists different weights and the corresponding amount of food to feed your dog to maintain that weight, and should be used only as a rough guideline.\n\nMany dogs are overweight because their families closely followed the directions on the label, which often indicates portion sizes that are too large. After all, the sooner the bag is empty, the sooner you will need to buy more food.\n\nStarting at the low end of the suggested guidelines and then monitoring your dog for hunger and body condition is a good way to proceed.\n\nDifferent Portions for Different Pooches\n\nThough it may sound counterintuitive, as a general rule, large breed dogs require less food and small breed dogs require more food when expressed on a volume of food per pound of body weight. The food requirements of individual dogs vary according to their health, level of activity, and age.\n\nHere are some guidelines for portion sizes at different stages of your dog’s life:\n\nPuppies: Puppies are typically introduced to solid food at three to four weeks of age and are completely weaned from their mother’s milk by eight weeks.\n\nPuppies require a diet that is higher in protein and other nutrients to support normal growth and development. If you are feeding commercial pet food to your adopted puppy, select a brand that is specially formulated for puppies.\n\nYoung puppies should be fed at least three times a day — morning, noon, and early evening — until their food requirements per pound of body weight begin to level off as they mature.\n\nBy the time the puppy is five or six months of age, his feeding schedule can be reduced to twice a day.\n\nIf you have a finicky puppy, you can add some warm water to dry food to encourage him to eat it. Cow’s milk can act as a laxative and cause digestive problems for some puppies and adult dogs, so avoid giving this to your pup or only give very small amounts. If your puppy doesn’t eat all his food within an hour, discard the uneaten portion.\n\nThe amount of food you feed your puppy will vary depending upon his size, activity, metabolism, and environment. Feeding too much can not only lead to a pudgy pup, but can also cause bone abnormalities and other health issues.\n\nIf your puppy appears to be gaining too much weight, gradually decrease his food intake, but if his ribs are showing, increase his portions. If you are unsure about his proper weight or appearance, talk to your vet for guidance.\n\nAdults: When the average dog is one year old, he has reached full maturity and enters a “maintenance period.” This means that his nutritional requirements will stay about the same during his young adult life, assuming he is not ill or engaging in extreme physical exercise.\n\nHis weight should remain stable and his body should be well-proportioned — he should have an observable waist and you should be able to feel his ribs with your fingertips, beneath a thin layer of fat.\n\nIf you are feeding your adopted adult dog a commercial pet food, select one that is specially formulated for adult dogs.\n\nAs with humans, a dog’s appetite may vary from day to day. This is not cause for alarm unless his loss of appetite persists for several days or he shows obvious signs of weight loss or illness. However, having no desire to eat can be the first sign of many illnesses, so monitor your dog’s food intake carefully.\n\nYou know your dog best, so if something seems amiss, don’t hesitate to take him to his vet.\n\nActive adults: Moderate exercise is essential for all dogs and helps them remain fit and trim throughout their lifetime. But some dogs, like some humans, will regularly do more intense exercising.\n\nIf your adopted dog is particularly active (for instance, if he jogs or runs with you regularly, or is involved in sporting activities) his energy needs will be greater than those of his more sedentary counterparts.\n\nBe aware, though, when a typically active dog is less active (for instance, during the cold winter months or when he suffers an injury, such as a sprain or muscle pull), his food requirements decrease. In these instances, experts recommend gradually changing to a lower energy, less nutrient-dense dog food.\n\nVery active dogs should not be fed immediately before or immediately after a strenuous workout. This can lead to digestion problems or discomfort (such as vomiting or loose stools) and may increase the risk of gastric bloat, a painful and often life-threatening condition caused by a twisting of the stomach.\n\nAlthough a small meal can be provided in the morning, hard-working dogs should receive the bulk of their daily calories one hour or more following their last exercise session each day. You can also feed your dog small snacks or treats during periods of increased activity to prevent hunger and fatigue. Allow him to rest intermittently and make sure he has access to fresh water at all times.\n\nSeniors: As with humans, the dietary requirements of dogs will change as they age. Elderly dogs have reduced energy requirements and therefore shouldn’t consume the same quantity of food as they did when they were younger.\n\nIf you’re feeding your adopted senior dog commercial pet food, look for brands that offer reduced calories while still including all the necessary nutrients.\n\nSenior dogs, like all dogs, should be fed according to their overall health and level of activity. A less active dog can quickly gain weight if you’re not careful.\n',
      };
    } else {
      return {
        title: 'How you feed Your cat?',
        body: 'Here’s the good news. If your cat is in good health and you’re feeding 100% complete and balanced cat foods appropriate for your cat’s life stage, there is no wrong answer to this question. Whether you’re feeding wet or dry cat food, your cat is getting the nutrition her body needs to support good health.\n\n\nIt really comes down to your cat’s individual preferences. We admire and respect our cats for their independent nature. So think of mealtime as another chance to discover and feed your cat’s uniqueness.\n\n\nDoes your cat prefer the crunchy texture of dry food? Or the variety of textures available in wet foods? Keep in mind that dry cat food offers dental, teeth-cleaning benefits. And the moisture in wet foods helps provide your cat with healthy hydration.\n\n\nLooking to create an even more exciting mealtime for your cat? Whether you’re feeding wet or dry cat food (or both), consider offering your cat’s food in a puzzle feeder that encourages her to “play” with her food. And as with any changes to your cat’s diet, be sure to monitor your cat’s weight and adjust food amounts accordingly.\n\n\nRemember, cats can have broad food preferences and crave variety. If that describes your cat, consider offering your cat new tastes and textures. Monitoring your cat’s preferences to wet vs. dry cat food and creating new meal experiences with this in mind is another very powerful way to strengthen the bond you share.',
      };
    }
  }

  footerSection() {
    return {
      email: 'Email@petology.com',
      location: 'First settlement/Cairo',
      phone: '(+2)0123456789',
      location2: 'Cairo/Egypt',
    };
  }
  petNeedsSection() {
    return [
      {
        imageUrl:
          'https://petology.orangedigitalcenteregypt.com/assets/Bowls and Cups.png',
        title: 'Bowls and Cups',
      },
      {
        imageUrl:
          'https://petology.orangedigitalcenteregypt.com/assets/Pet Food.png',
        title: 'Pet Food',
      },
      {
        imageUrl:
          'https://petology.orangedigitalcenteregypt.com/assets/Inoculation.png',
        title: 'Inoculation',
      },
      {
        imageUrl:
          'https://petology.orangedigitalcenteregypt.com/assets/Sleeping Areas.png',
        title: 'Sleeping Areas',
      },
      {
        imageUrl:
          'https://petology.orangedigitalcenteregypt.com/assets/Toys.png',
        title: 'Toys',
      },
      {
        imageUrl:
          'https://petology.orangedigitalcenteregypt.com/assets/Transportation.png',
        title: 'Transportation',
      },
      {
        imageUrl:
          'https://petology.orangedigitalcenteregypt.com/assets/Vitamins.png',
        title: 'Vitamins',
      },
    ];
  }
}
