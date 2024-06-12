/**
 * @description       : 
 * @author            : VIKASH MUNDARI
 * @group             : 
 * @last modified on  : 06-10-2024
 * @last modified by  : VIKASH MUNDARI
**/
// public with sharing class PropertyController {
//     @AuraEnabled(cacheable=true)
//     public static List<Property__c> getPropertyItems() {
//         try {
//             return [SELECT Id, Name, Description__c, Price__c, Image__c, PropertyType__c FROM Property__c];
//         } catch (Exception e) {
//             System.debug('Error while fetching properties: ' + e.getMessage());
//             throw new AuraHandledException('Error while fetching properties!');
//         }
//     } 

//      @AuraEnabled
//     public static void updatePropertyItems1(List<Property__c> data) {
//         try {
//             if (data != null && !data.isEmpty()) {
//                 update data;
//             }
//         } catch (DmlException e) {
//             throw new AuraHandledException('Error updating property items: ' + e.getMessage());
//         }
//     }
    
//      @AuraEnabled
//     public static void deletePropertyItem(Id propertyId) {
//         delete [SELECT Id FROM Property__c WHERE Id = :propertyId];
//     }
    
//     @AuraEnabled
//     public static List<Property__c> searchPropertyItems(String searchKeywords, List<String> filters, Integer priceRange) {
//         try {
//             String searchTerm = '%' + searchKeywords + '%';
//             String queryString = 'SELECT Id, Name, Description__c, Price__c, Image__c, PropertyType__c FROM Property__c WHERE (Name LIKE :searchTerm OR Description__c LIKE :searchTerm)';
//             if (filters != null && !filters.isEmpty()) {
//                 queryString += ' AND PropertyType__c IN :filters';
//             }
//             queryString += ' AND Price__c <= :priceRange';
//             return Database.query(queryString);
//         } catch (Exception e) {
//             System.debug('Error while searching properties: ' + e.getMessage());
//             throw new AuraHandledException('Error while searching properties!');
//         }
//     }

//     @AuraEnabled
//     public static void deleteProperty(Id propertyId) {
//         try {
//             Property__c property = [SELECT Id FROM Property__c WHERE Id = :propertyId LIMIT 1];
//             delete property;
//         } catch (Exception e) {
//             System.debug('Error while deleting property: ' + e.getMessage());
//             throw new AuraHandledException('Error while deleting property!');
//         }
//     }
// }

public with sharing class PropertyController {

    // Fetches all property items with the specified fields
    @AuraEnabled(cacheable=true)
    public static List<Property__c> getPropertyItems() {
        try {
            return [SELECT Id, Name, Description__c, Price__c, Image__c, PropertyType__c FROM Property__c];
        } catch (Exception e) {
            System.debug('Error while fetching properties: ' + e.getMessage());
            throw new AuraHandledException('Error while fetching properties!');
        }
    } 

    // Updates a list of property items
    @AuraEnabled
    public static void updatePropertyItems1(List<Property__c> data) {
        try {
            if (data != null && !data.isEmpty()) {
                update data;
            }
        } catch (DmlException e) {
            throw new AuraHandledException('Error updating property items: ' + e.getMessage());
        }
    }

    // Deletes a specific property item by Id
    @AuraEnabled
    public static void deletePropertyItem(Id propertyId) {
        delete [SELECT Id FROM Property__c WHERE Id = :propertyId];
    }

    // Searches property items based on keywords, filters, and price range
    @AuraEnabled
    public static List<Property__c> searchPropertyItems(String searchKeywords, List<String> filters, Integer priceRange) {
        try {
            String searchTerm = '%' + searchKeywords + '%';
            String queryString = 'SELECT Id, Name, Description__c, Price__c, Image__c, PropertyType__c FROM Property__c WHERE (Name LIKE :searchTerm OR Description__c LIKE :searchTerm)';
            if (filters != null && !filters.isEmpty()) {
                queryString += ' AND PropertyType__c IN :filters';
            }
            queryString += ' AND Price__c <= :priceRange';
            return Database.query(queryString);
        } catch (Exception e) {
            System.debug('Error while searching properties: ' + e.getMessage());
            throw new AuraHandledException('Error while searching properties!');
        }
    }

    // Deletes a property by Id
    @AuraEnabled
    public static void deleteProperty(Id propertyId) {
        try {
            Property__c property = [SELECT Id FROM Property__c WHERE Id = :propertyId LIMIT 1];
            delete property;
        } catch (Exception e) {
            System.debug('Error while deleting property: ' + e.getMessage());
            throw new AuraHandledException('Error while deleting property!');
        }
    }
}
