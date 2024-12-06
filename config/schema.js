import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const allListing = pgTable('allListingDetails',{
    id: serial('id').primaryKey(),
    listingTitle: varchar('listingTitle').notNull(),
    tagline: varchar('tagline'),
    originalPrice: varchar('originalPrice'),
    sellingPrice: varchar('sellingPrice').notNull(),
    category: varchar('category').notNull(),
    condition: varchar('condition').notNull(),
    make: varchar('make').notNull(),
    model: varchar('model').notNull(),
    year: varchar('year').notNull(),
    driveType: varchar('driveType').notNull(),
    transmission: varchar('transmission').notNull(),
    fuelType: varchar('fuelType').notNull(),
    mileage: varchar('mileage').notNull(),
    engineSize: varchar('engineSize'),
    cylinder: varchar('cylinder'),
    color: varchar('color').notNull(),
    door: varchar('door').notNull(),
    vin: varchar('vin'),
    offerType: varchar('offerType'),
    listingDescription: varchar('listingDescription').notNull(),
    features: json("features"),
    createdBy:varchar('createdBy').notNull().default('gameplayer3434@gmail.com'),
    // postedOn:varchar('postedOn').notNull('23 jan')
})


export const AllListingImages = pgTable('allListingImages',{
    id:serial('id').primaryKey(),
    imageUrl:varchar('imageUrl').notNull(),
    imageListingId:integer('imageListingId').notNull().references(()=>allListing.id)
})

