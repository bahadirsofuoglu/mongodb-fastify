const roles = Object.freeze({
  ADMIN: 'admin',
  SUPERVISOR: 'supervisor',
  AGENT: 'agent',
  NETWORK: 'network'
})
const userStatuses = Object.freeze({
  NEW: 'new',
  ACTIVE: 'active',
  DELETED: 'deleted'
})

const networkTypes = Object.freeze({
  TOW: 1,
  RENTAL_CAR: 2,
  REPAIR_SERVICE: 10
})

const fileStatuses = Object.freeze({
  WAITING: 'waiting',
  ACTIVE: 'active',
  CANCELED: 'canceled',
  COMPLETED: 'completed'
})

const fileServiceStatuses = Object.freeze({
  WAITING_REPAIR_DAY: 'waitingRepairDay', //'Onarım Süresi Bekliyor',
  NETWORK_ASSIGNED: 'networkAssigned', //'Tedarikçi Yönlendirmesi Yapıldı',
  NETWORK_NOT_FOUND: 'networkNotFound', //'Yönlendirme Yapılacak Tedarikçi Bulunamadı',
  CANCELED: 'canceled', //'Hizmet İptal Edildi',
  WAITING: 'waiting', //'Yönlendirme Bekliyor',
  WAITING_END: 'waitingEnd', //'Yönlendirme Yapılmış',
  COMPLETED: 'completed', //'Hizmet Verilmiş',
  NETWORK_REJECTED_NOT_FOUND: 'networkRejectedNotFound', //'Reddedilen ve Başka Bir Tedarikçiye Atanamayan İş',
  NETWORK_REJECTED_ASSIGNED: 'networkRejectedAssigned', //'Reddedilen ve Başka Bir Tedarikçiye Atanan İş',
  NETWORK_NOT_RESPONDED_NOT_FOUND: 'networkNotRespondedNotFound', //'Kabul Edilmeyen ve Başka Bir Tedarikçiye Atanamayan İş',
  NETWORK_NOT_RESPONDED_ASSIGNED: 'networkNotRespondedAssigned', //'Kabul Edilmeyen ve Başka Bir Tedarikçiye Atanan İş',
  NETWORK_ACCEPTED_PROCCESSING: 'networkAcceptedProcessing', //'Hizmet Yolda',
  TOW_REPAIR_SERVICE_DONE: 'towRepairServiceDone', //'Araç Servise Teslim Edildi',
  TOW_INTERRUPTED: 'towInterrupted' //'Boşa Çıkış Yapıldı'
})

module.exports = {
  roles,
  userStatuses,
  fileStatuses,
  fileServiceStatuses,
  networkTypes
}
