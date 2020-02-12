/* eslint-disable no-magic-numbers */
import {
    loginPage,
    rolesPage,
    typesPage,
    smsPage,
    notificationsPage,
    appVersionsPage,
    carModelsListPage,
    blockReasonPage,
    clientsPage,
    settingsPage,
    promoCodesPage,
    mapViewPage,
    reportsPage,
    qualityPage,
    requestsPage,
    complaintsPage,
    captainsPage,
    bonusPlanPage,
    cardLocationsPage,
    blockReasonsPage,
    faqPage,
    cancellationReasonsPage,
    invitationCodesPage,
    usersPage,
    serviceTypesPage,
    companiesPage,
    carModelsPage,
    carBrandsPage,
    carTypesPage,
    driverBlockPage,
    clientBlockPage,
    auditPage,
    branchesPage,
    regionsPage,
} from '../pages';
import { context } from '../../data/Context';
import {
    rolesValidator,
    usersValidator,
    companiesValidator,
    serviceTypesValidator,
    carModelsValidator,
    carBrandsValidator,
    carTypesValidator,
    blockReasonsValidator,
    invitationCodesValidator,
    cancellationReasonsValidator,
    faqValidator,
    cardLocationsValidator,
    bonusPlanValidator,
    clientsValidator,
    requestsValidator,
    complaintsValidator,
    qualityValidator,
    reportsValidator,
    mapViewValidator,
    promoCodesValidator,
    settingsValidator,
    typesValidator,
    blockReasonValidator,
    appVersionsValidator,
    carModelsListValidator,
    branchesValidator,
    regionsValidator,
    notificationsValidator,
    auditPageValidator,
    clientBlockValidator,
    driverBlockValidator,
    smsValidator,
    captainsValidator,
} from '../validators';

describe('Smoke test', () => {
    before(() => {
        loginPage.open();
    });
    beforeEach(() => {
        loginPage.logIn(context.logins.user);
    });
    it('should render Roles page', () => {
        rolesPage.openpage();
        loginPage.logIn(context.logins.user);
        rolesValidator.checkRolesPage();
    });
    it('Page with name Users should rendered', () => {
        usersPage.openpage(context.logins.user);
        usersValidator.checkUsersPage();
    });
    it('Page with name Service Types should rendered', () => {
        loginPage.logIn(context.logins.user);
        serviceTypesPage.openpage();
        serviceTypesValidator.checkServiceTypesPage();
    });
    it('Page with name Companies should rendered', () => {
        companiesPage.openpage();
        companiesValidator.checkCompaniesPage();
    });
    it('Page with name Car Models should rendered', () => {
        carModelsPage.openpage();
        carModelsValidator.checkCarModelsPage();
    });
    it('Page with name Car Brands should rendered', () => {
        carBrandsPage.openpage();
        carBrandsValidator.checkCarBrandsPage();
    });
    it('Page with name Car Types should rendered', () => {
        carTypesPage.openpage();
        carTypesValidator.checkCarTypesPage();
    });
    it('Page with name Block Resons should rendered', () => {
        blockReasonsPage.openpage();
        blockReasonsValidator.checkBlockReasonsPage();
    });
    it('Page with name Invitation Codes should rendered', () => {
        invitationCodesPage.openpage();
        invitationCodesValidator.checkInvitationCodesPage();
    });
    it('Page with name Cancellation Reasons should rendered', () => {
        cancellationReasonsPage.openpage();
        cancellationReasonsValidator.checkCancellationReasonsPage();
    });
    it('Page with name FAQ should rendered', () => {
        faqPage.openpage();
        faqValidator.checkFaqPage();
    });
    it('Page with name Card Locations should rendered', () => {
        cardLocationsPage.openpage();
        cardLocationsValidator.checkCardLocationsPage();
    });
    it('Page with name Bonus Plan should rendered', () => {
        bonusPlanPage.openpage();
        bonusPlanValidator.checkBonusPlanPage();
    });
    it('Page with name Clients should rendered', () => {
        clientsPage.openpage();
        clientsValidator.checkClientsPage();
    });
    it('Page with name Captains rendered', () => {
        captainsPage.openpage();
        captainsValidator.checkCaptainsPage();
    });
    it('Page with name Requests rendered', () => {
        requestsPage.openpage();
        requestsValidator.checkRequestsPage();
    });
    it('Page with name Complaints rendered', () => {
        complaintsPage.openpage();
        complaintsValidator.checkComplaintsPage();
    });
    it('Page with name Quality rendered', () => {
        qualityPage.openpage();
        qualityValidator.checkQualityPage();
    });
    it('Page with name Reports rendered', () => {
        reportsPage.openpage();
        reportsValidator.checkReportsPage();
    });
    it('Page with name Map View rendered', () => {
        mapViewPage.openpage();
        mapViewValidator.checkMapViewPage();
    });
    it('Page with name Promo Codes rendered', () => {
        promoCodesPage.openpage();
        promoCodesValidator.checkPromoCodesPage();
    });
    it('Page with name Settings rendered', () => {
        settingsPage.openpage();
        settingsValidator.checkSettingsPage();
    });
    it('Page with name Types rendered', () => {
        typesPage.openpage();
        typesValidator.checkTypesPage();
    });
    it('Page with name Block Reason rendered', () => {
        blockReasonPage.openpage();
        blockReasonValidator.checkBlockReasonPage();
    });
    it('Page with name App Versions rendered', () => {
        appVersionsPage.openpage();
        appVersionsValidator.checkAppVersionsPage();
    });
    it('Page with name Car Models List rendered', () => {
        carModelsListPage.openpage();
        carModelsListValidator.checkCarModelsListPage();
    });
    it('Page with name Notifications rendered', () => {
        notificationsPage.openpage();
        notificationsValidator.checkNotificationsPage();
    });
    it('Page with name SMS rendered', () => {
        smsPage.openpage();
        smsValidator.checkSmsPage();
    });
    it('Page with name Driver Block rendered', () => {
        driverBlockPage.openpage();
        driverBlockValidator.checkDriverBlockPage();
    });
    it('Page with name Client Block rendered', () => {
        clientBlockPage.openpage();
        clientBlockValidator.checkClientBlockPage();
    });
    it('Page with name Audit Page rendered', () => {
        auditPage.openpage();
        auditPageValidator.checkAuditPagePage();
    });
    it('Page with name Branches rendered', () => {
        branchesPage.open();
        branchesValidator.checkBranchesPage();
    });
    it('Page with name Regions rendered', () => {
        regionsPage.openpage();
        regionsValidator.checkRegionsPage();
    });
});
