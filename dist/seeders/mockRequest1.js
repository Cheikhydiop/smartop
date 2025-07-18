"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requests = exports.sampleAttachments = exports.sampleComments = exports.locations = exports.requestUsers = void 0;
// mockRequest1.ts
const types_1 = require("../models/types");
// Additional users for requests
exports.requestUsers = [
    {
        id: 'citizen1',
        name: 'Amadou Diop',
        email: 'amadou.diop@gmail.com',
        role: types_1.UserRole.CITIZEN,
        phoneNumber: '+221 77 123 45 67',
        status: types_1.UserStatus.ACTIVE,
        password: 'securepassword123', // Assurez-vous que password est défini
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'citizen2',
        name: 'Fatima Ndiaye',
        email: 'fatima.ndiaye@gmail.com',
        role: types_1.UserRole.CITIZEN,
        phoneNumber: '+221 76 234 56 78',
        status: types_1.UserStatus.ACTIVE,
        password: 'securepassword456', // Assurez-vous que password est défini
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'citizen3',
        name: 'Ibrahima Seck',
        email: 'ibrahima.seck@gmail.com',
        role: types_1.UserRole.CITIZEN,
        phoneNumber: '+221 78 345 67 89',
        status: types_1.UserStatus.ACTIVE,
        password: 'securepassword456', // Assurez-vous que password est défini
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'client1',
        name: 'Société Nationale d\'Électricité',
        email: 'contact@senelec.sn',
        role: types_1.UserRole.CLIENT,
        phoneNumber: '+221 33 839 30 30',
        organization: 'Senelec',
        status: types_1.UserStatus.ACTIVE,
        password: 'securepassword456', // Assurez-vous que password est défini
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'client2',
        name: 'Ministère de l\'Énergie',
        email: 'contact@energie-gov.sn',
        role: types_1.UserRole.CLIENT,
        phoneNumber: '+221 33 889 09 00',
        organization: 'Gouvernement du Sénégal',
        status: types_1.UserStatus.ACTIVE,
        password: 'securepassword456', // Assurez-vous que password est défini
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 'agent1',
        name: 'Mariama Diallo',
        email: 'mariama.diallo@smartop360.com',
        role: types_1.UserRole.CALL_CENTER,
        phoneNumber: '+221 77 456 78 90',
        organization: 'SmartOp360',
        status: types_1.UserStatus.ACTIVE,
        password: 'securepassword456', // Assurez-vous que password est défini
        createdAt: new Date(),
        updatedAt: new Date(),
    }
];
// Common locations
exports.locations = {
    dakarPlateau: {
        id: 'loc1',
        latitude: 14.6937,
        longitude: -17.4441,
        address: 'Rue Félix Faure',
        city: 'Dakar',
        region: 'Dakar',
        country: 'Sénégal',
        description: 'Quartier Plateau',
    },
    dakarMedina: {
        id: 'loc2',
        latitude: 14.6806,
        longitude: -17.4369,
        address: 'Avenue Blaise Diagne',
        city: 'Dakar',
        region: 'Dakar',
        country: 'Sénégal',
        description: 'Quartier Médina',
    },
    thies: {
        id: 'loc3',
        latitude: 14.7910,
        longitude: -16.9359,
        city: 'Thiès',
        region: 'Thiès',
        country: 'Sénégal',
    },
    saintLouis: {
        id: 'loc4',
        latitude: 16.0326,
        longitude: -16.5012,
        city: 'Saint-Louis',
        region: 'Saint-Louis',
        country: 'Sénégal',
    },
    fatick: {
        id: 'loc5',
        latitude: 14.3390,
        longitude: -16.4109,
        city: 'Fatick',
        region: 'Fatick',
        country: 'Sénégal',
    },
    mbour: {
        id: 'loc6',
        latitude: 14.4162,
        longitude: -16.9669,
        city: 'Mbour',
        region: 'Thiès',
        country: 'Sénégal',
    },
    kaolack: {
        id: 'loc7',
        latitude: 14.1652,
        longitude: -16.0756,
        city: 'Kaolack',
        region: 'Kaolack',
        country: 'Sénégal',
    }
};
// Sample comments
exports.sampleComments = [
    {
        id: 'comment1',
        content: 'Le technicien est en route et devrait arriver sous 30 minutes.',
        createdBy: exports.requestUsers[0],
        createdById: exports.requestUsers[0].id,
        createdAt: new Date('2025-04-10T09:30:00Z'),
        updatedAt: new Date('2025-04-10T09:30:00Z'),
        attachments: [],
    },
    {
        id: 'comment2',
        content: 'J\'ai constaté que le problème persiste. Pouvez-vous envoyer quelqu\'un rapidement ?',
        createdBy: exports.requestUsers[1],
        createdById: exports.requestUsers[1].id,
        createdAt: new Date('2025-04-10T10:15:00Z'),
        updatedAt: new Date('2025-04-10T10:15:00Z'),
        attachments: [],
    },
    {
        id: 'comment3',
        content: 'L\'équipe technique a diagnostiqué un problème de transformateur. Nous prévoyons un remplacement d\'urgence.',
        createdBy: exports.requestUsers[2], // Assurez-vous que createdBy est défini
        createdById: exports.requestUsers[2].id,
        createdAt: new Date('2025-04-10T10:15:00Z'),
        updatedAt: new Date('2025-04-10T10:15:00Z'),
        attachments: [],
    },
    {
        id: 'comment4',
        content: 'Nous avons besoin d\'informations supplémentaires pour traiter votre demande. Pouvez-vous nous préciser l\'adresse exacte ?',
        createdBy: exports.requestUsers[3], // Marie Faye - Call Center
        createdById: exports.requestUsers[2].id,
        createdAt: new Date('2025-04-11T14:30:00Z'),
        updatedAt: new Date('2025-04-11T14:30:00Z'),
        attachments: [],
    },
    {
        id: 'comment5',
        content: 'J\'ai envoyé les détails par email. Veuillez vérifier.',
        createdBy: exports.requestUsers[1], // Fatima Ndiaye - Citizen
        createdById: exports.requestUsers[1].id, // Assurez-vous que createdById est défini
        createdAt: new Date('2025-04-11T15:45:00Z'),
        updatedAt: new Date('2025-04-11T15:45:00Z'),
        attachments: [],
    }
];
// Sample attachments
exports.sampleAttachments = [
    {
        id: 'attachment1',
        fileName: 'photo-panne.jpg',
        fileType: 'image/jpeg',
        fileSize: 2500000,
        fileUrl: '/attachments/photo-panne.jpg',
        uploadedBy: exports.requestUsers[0],
        uploadedById: exports.requestUsers[0].id, // Assurez-vous que uploadedById est défini
        uploadedAt: new Date('2025-04-10T08:50:00Z'),
        description: 'Photo de la ligne électrique endommagée',
    },
    {
        id: 'attachment2',
        fileName: 'facture.pdf',
        fileType: 'application/pdf',
        fileSize: 450000,
        fileUrl: '/attachments/facture.pdf',
        uploadedBy: exports.requestUsers[1],
        uploadedById: exports.requestUsers[1].id, // Assurez-vous que uploadedById est défini
        uploadedAt: new Date('2025-04-10T08:50:00Z'),
        description: 'Facture d\'électricité',
    },
    {
        id: 'attachment3',
        fileName: 'location-plan.pdf',
        fileType: 'application/pdf',
        fileSize: 850000,
        fileUrl: '/attachments/location-plan.pdf',
        uploadedBy: exports.requestUsers[2],
        uploadedById: exports.requestUsers[2].id, // Assurez-vous que uploadedById est défini
        uploadedAt: new Date('2025-04-12T11:05:00Z'),
        description: 'Plan d\'emplacement pour l\'installation',
    },
    {
        id: 'attachment4',
        fileName: 'diagnostic-report.pdf',
        fileType: 'application/pdf',
        fileSize: 1200000,
        fileUrl: '/attachments/diagnostic-report.pdf',
        uploadedBy: exports.requestUsers[3],
        uploadedById: exports.requestUsers[3].id, // Assurez-vous que uploadedById est défini
        uploadedAt: new Date('2025-04-13T16:30:00Z'),
        description: 'Rapport de diagnostic technique',
    }
];
exports.requests = [
    {
        id: 'req-001',
        title: 'Panne d\'électricité au Plateau',
        description: 'Coupure d\'électricité dans tout le quartier du Plateau depuis ce matin. Plusieurs commerces et bureaux sont touchés.',
        type: types_1.RequestType.INCIDENT,
        priority: types_1.Priority.HIGH,
        status: types_1.RequestStatus.IN_PROGRESS,
        location: exports.locations.dakarPlateau,
        createdBy: exports.requestUsers[0],
        createdById: exports.requestUsers[0].id,
        createdAt: new Date('2025-04-10T08:45:00Z'),
        assignedTo: exports.requestUsers[1],
        assignedToId: exports.requestUsers[1].id,
        comments: [
            {
                id: 'comment1',
                content: 'Le technicien est en route et devrait arriver sous 30 minutes.',
                createdBy: exports.requestUsers[0],
                createdById: exports.requestUsers[0].id,
                createdAt: new Date('2025-04-10T09:30:00Z'),
                updatedAt: new Date('2025-04-10T09:30:00Z'),
                attachments: [],
            },
            {
                id: 'comment2',
                content: 'J\'ai constaté que le problème persiste. Pouvez-vous envoyer quelqu\'un rapidement ?',
                createdBy: exports.requestUsers[1],
                createdById: exports.requestUsers[1].id,
                createdAt: new Date('2025-04-10T10:15:00Z'),
                updatedAt: new Date('2025-04-10T10:15:00Z'),
                attachments: [],
            }
        ],
        attachments: [exports.sampleAttachments[0]],
        dueDate: new Date('2025-04-10T14:00:00Z'),
        channel: types_1.RequestChannel.APP,
        tasks: [],
    },
    {
        id: 'req-002',
        title: 'Demande de nouveau branchement',
        description: 'Demande de branchement pour une nouvelle habitation. Construction récemment achevée avec certificat de conformité disponible.',
        type: types_1.RequestType.CONNECTION,
        priority: types_1.Priority.MEDIUM,
        status: types_1.RequestStatus.ANALYZING,
        location: exports.locations.mbour,
        createdBy: exports.requestUsers[1],
        createdById: exports.requestUsers[1].id,
        createdAt: new Date('2025-04-11T09:15:00Z'),
        comments: [exports.sampleComments[3], exports.sampleComments[4]],
        attachments: [exports.sampleAttachments[1], exports.sampleAttachments[2]],
        dueDate: new Date('2025-04-18T17:00:00Z'),
        channel: types_1.RequestChannel.WEBSITE,
        tasks: [],
    },
    {
        id: 'req-003',
        title: 'Poteau électrique dangereux',
        description: 'Un poteau électrique penche dangereusement vers la route. Il y a un risque qu\'il tombe sur les passants ou les véhicules.',
        type: types_1.RequestType.INCIDENT,
        priority: types_1.Priority.CRITICAL,
        status: types_1.RequestStatus.ASSIGNED,
        location: exports.locations.thies,
        createdBy: exports.requestUsers[2],
        createdById: exports.requestUsers[2].id,
        createdAt: new Date('2025-04-11T09:15:00Z'),
        attachments: [exports.sampleAttachments[2], exports.sampleAttachments[3]],
        comments: [exports.sampleComments[3], exports.sampleComments[4]],
        dueDate: new Date('2025-04-18T17:00:00Z'),
        channel: types_1.RequestChannel.CALL_CENTER,
        tasks: [],
    },
    {
        id: 'req-004',
        title: 'Inspection planifiée transformateur T23',
        description: 'Inspection de maintenance préventive pour le transformateur T23 dans le quartier Médina selon le calendrier annuel.',
        type: types_1.RequestType.INSPECTION,
        priority: types_1.Priority.MEDIUM,
        status: types_1.RequestStatus.ASSIGNED,
        location: exports.locations.dakarMedina,
        createdBy: exports.requestUsers[1],
        createdById: exports.requestUsers[1].id,
        createdAt: new Date('2025-04-11T09:15:00Z'),
        assignedTo: exports.requestUsers[3],
        assignedToId: exports.requestUsers[3].id,
        dueDate: new Date('2025-04-10T14:00:00Z'),
        channel: types_1.RequestChannel.API,
        tasks: [],
        comments: [],
        attachments: [],
    },
    {
        id: 'req-005',
        title: 'Audit réseau électrique Kaolack',
        description: 'Audit complet du réseau électrique du centre-ville de Kaolack pour identifier les points faibles et planifier les rénovations.',
        type: types_1.RequestType.AUDIT,
        priority: types_1.Priority.MEDIUM,
        status: types_1.RequestStatus.VALIDATED,
        location: exports.locations.kaolack,
        createdBy: exports.requestUsers[0],
        createdById: exports.requestUsers[0].id,
        createdAt: new Date('2025-04-01T09:00:00Z'),
        dueDate: new Date('2025-04-20T18:00:00Z'),
        channel: types_1.RequestChannel.API,
        tasks: [],
        comments: [],
        attachments: [],
    },
    {
        id: 'req-006',
        title: 'Coupures récurrentes à Saint-Louis',
        description: 'Nous subissons des coupures d\'électricité quotidiennes de courte durée à Saint-Louis, généralement en fin d\'après-midi.',
        type: types_1.RequestType.INCIDENT,
        priority: types_1.Priority.HIGH,
        status: types_1.RequestStatus.SUBMITTED,
        location: exports.locations.saintLouis,
        createdBy: exports.requestUsers[4],
        createdById: exports.requestUsers[4].id,
        createdAt: new Date('2025-04-09T17:20:00Z'),
        dueDate: new Date('2025-04-16T17:00:00Z'),
        channel: types_1.RequestChannel.WEBSITE,
        tasks: [],
        comments: [],
        attachments: [],
    },
    {
        id: 'req-007',
        title: 'Maintenance groupe électrogène hôpital Fatick',
        description: 'Maintenance préventive du groupe électrogène de l\'hôpital régional de Fatick, dans le cadre du projet d\'électrification.',
        type: types_1.RequestType.MAINTENANCE,
        priority: types_1.Priority.HIGH,
        status: types_1.RequestStatus.VALIDATED,
        location: exports.locations.fatick,
        createdBy: exports.requestUsers[1],
        createdById: exports.requestUsers[1].id,
        createdAt: new Date('2025-03-25T11:45:00Z'),
        dueDate: new Date('2025-04-25T16:00:00Z'),
        channel: types_1.RequestChannel.API,
        tasks: [],
        comments: [],
        attachments: [],
    },
    {
        id: 'req-008',
        title: 'Installation compteurs intelligents quartier HLM',
        description: 'Installation de 150 compteurs intelligents dans le quartier HLM de Dakar, dans le cadre du programme de modernisation.',
        type: types_1.RequestType.CONNECTION,
        priority: types_1.Priority.MEDIUM,
        status: types_1.RequestStatus.VALIDATED,
        location: {
            id: 'loc-09',
            latitude: 14.7206,
            longitude: -17.4370,
            address: 'Quartier HLM',
            city: 'Dakar',
            region: 'Dakar',
            country: 'Sénégal',
        },
        createdBy: exports.requestUsers[0],
        createdById: exports.requestUsers[0].id,
        createdAt: new Date('2025-04-02T14:30:00Z'),
        dueDate: new Date('2025-05-02T18:00:00Z'),
        channel: types_1.RequestChannel.API,
        project: undefined,
        tasks: [],
        comments: [],
        attachments: [],
    },
    {
        id: 'req-009',
        title: 'Chute tension quartier Fann',
        description: 'Nous constatons une chute de tension importante dans le quartier Fann, particulièrement le soir. Les appareils électroménagers fonctionnent mal.',
        type: types_1.RequestType.INCIDENT,
        priority: types_1.Priority.MEDIUM,
        status: types_1.RequestStatus.ANALYZING,
        location: {
            id: 'loc-010',
            latitude: 14.6890,
            longitude: -17.4660,
            address: 'Quartier Fann',
            city: 'Dakar',
            region: 'Dakar',
            country: 'Sénégal',
        },
        createdBy: exports.requestUsers[0],
        createdById: exports.requestUsers[0].id,
        createdAt: new Date('2025-04-08T19:15:00Z'),
        dueDate: new Date('2025-04-15T18:00:00Z'),
        channel: types_1.RequestChannel.CALL_CENTER,
        tasks: [],
        comments: [],
        attachments: [],
    },
    {
        id: 'req-010',
        title: 'Étude préalable extension réseau Thiès Est',
        description: 'Étude technique pour l\'extension du réseau électrique vers les nouveaux quartiers de l\'est de Thiès.',
        type: types_1.RequestType.AUDIT,
        priority: types_1.Priority.LOW,
        status: types_1.RequestStatus.ASSIGNED,
        location: exports.locations.thies,
        createdBy: exports.requestUsers[0],
        createdById: exports.requestUsers[1].id, // attention ici : createdById différent de createdBy.id, c'est voulu ?
        createdAt: new Date('2025-03-30T10:00:00Z'),
        assignedTo: exports.requestUsers[2],
        assignedToId: exports.requestUsers[2].id,
        dueDate: new Date('2025-04-30T17:00:00Z'),
        channel: types_1.RequestChannel.API,
        tasks: [],
        comments: [],
        attachments: [],
    },
    {
        id: 'req-011',
        title: 'Remplacement transformateur défectueux',
        description: 'Le transformateur du quartier Grand Dakar montre des signes de défaillance et doit être remplacé d\'urgence avant une panne totale.',
        type: types_1.RequestType.MAINTENANCE,
        priority: types_1.Priority.CRITICAL,
        status: types_1.RequestStatus.IN_PROGRESS,
        location: {
            id: 'loc-011',
            latitude: 14.7001,
            longitude: -17.4700,
            address: 'Grand Dakar',
            city: 'Dakar',
            region: 'Dakar',
            country: 'Sénégal',
        },
        createdBy: exports.requestUsers[1],
        createdById: exports.requestUsers[1].id,
        createdAt: new Date('2025-04-12T08:00:00Z'),
        assignedTo: exports.requestUsers[3],
        assignedToId: exports.requestUsers[3].id,
        dueDate: new Date('2025-04-20T12:00:00Z'),
        channel: types_1.RequestChannel.APP,
        tasks: [],
        comments: [],
        attachments: [],
    }
];
