//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.EtoOno
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    //  *** Start programmer edit section *** (Using statements)

    //  *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Оно.
    /// </summary>
    //  *** Start programmer edit section *** (Оно CustomAttributes)

    //  *** End programmer edit section *** (Оно CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ОноE", new string[] {
            "Да as \'Да\'"})]
    [View("ОноL", new string[] {
            "Да as \'Да\'"})]
    public class Оно : ICSSoft.STORMNET.DataObject
    {
        
        private bool fДа;
        
        //  *** Start programmer edit section *** (Оно CustomMembers)

        //  *** End programmer edit section *** (Оно CustomMembers)

        
        /// <summary>
        /// Да.
        /// </summary>
        //  *** Start programmer edit section *** (Оно.Да CustomAttributes)

        //  *** End programmer edit section *** (Оно.Да CustomAttributes)
        public virtual bool Да
        {
            get
            {
                //  *** Start programmer edit section *** (Оно.Да Get start)

                //  *** End programmer edit section *** (Оно.Да Get start)
                bool result = this.fДа;
                //  *** Start programmer edit section *** (Оно.Да Get end)

                //  *** End programmer edit section *** (Оно.Да Get end)
                return result;
            }
            set
            {
                //  *** Start programmer edit section *** (Оно.Да Set start)

                //  *** End programmer edit section *** (Оно.Да Set start)
                this.fДа = value;
                //  *** Start programmer edit section *** (Оно.Да Set end)

                //  *** End programmer edit section *** (Оно.Да Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ОноE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОноE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОноE", typeof(IIS.EtoOno.Оно));
                }
            }
            
            /// <summary>
            /// "ОноL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ОноL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ОноL", typeof(IIS.EtoOno.Оно));
                }
            }
        }
    }
}
